import {useEffect, useCallback} from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import {camelizeKeys} from 'humps';
import {envMobile} from './types';

export const getEnvMobile = (): envMobile => {
  try {
    const jsonRecoverd = remoteConfig().getValue('env_mobile')?.asString();
    console.log( '===> ',jsonRecoverd.length);
    if (jsonRecoverd.length > 0) {
      const envMobileRemoteConfig = camelizeKeys(
        JSON.parse(jsonRecoverd),
      ) as unknown as envMobile;
      console.log( '===> parsed',envMobileRemoteConfig);
      return envMobileRemoteConfig;
    }
    return undefined;
  } catch (error) {}
};

const useFirebase = () => {
  const initRemoteConfig = useCallback(
    () =>
      new Promise<void>((resolve, reject) => {
        remoteConfig()
          .fetchAndActivate()
          .then(() => resolve())
          .catch(error => reject(error));
      }),
    [],
  );
  const getEnvironmentMobile = useCallback(
    (envName: string): Promise<envMobile> =>
      new Promise<envMobile>((resolve, reject) => {
        try {
          remoteConfig()
            .fetchAndActivate()
            .then(() => {
              const envMobileRemoteConfig = camelizeKeys(
                JSON.parse(remoteConfig().getValue(envName)?.asString()),
              ) as unknown as envMobile;
              resolve(envMobileRemoteConfig);
            })
            .catch(error => reject(error));
        } catch (error) {
          reject(error);
        }
      }),
    [],
  );

  useEffect(() => {
    initRemoteConfig();
  }, [initRemoteConfig]);

  return {
    getEnvironmentMobile,
  };
};
export default useFirebase;
