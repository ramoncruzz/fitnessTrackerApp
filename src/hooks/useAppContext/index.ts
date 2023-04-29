import {useState, useEffect} from 'react';
import useFirebase from '../useFirebase';
import {ContextType, defaultValue} from '../../store';

const useAppContext = () => {
  const [context, setContext] = useState<ContextType>(defaultValue);
  const {getEnvironmentMobile} = useFirebase();
  useEffect(() => {
    getEnvironmentMobile('env_mobile')
      .then(result => {
        console.log('FIREBASE  ', result);
        result.XRapidAPIHost;
        setContext({...context, env: result});
      })
      .catch(() => {
        setContext(defaultValue);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getEnvironmentMobile]);

  return {
    setContext,
    context,
  };
};
export default useAppContext;
