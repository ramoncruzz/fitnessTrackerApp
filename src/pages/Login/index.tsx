import * as React from 'react';
import {Div} from 'react-native-magnus';

import {trackPageView} from '../../utils/trackTestID';

const namePageForTesting = 'login';
const Login: React.FC = (): JSX.Element => {
  return (
    <Div
      testID={trackPageView(namePageForTesting, 'page')}
      flex={1}
      bg="indigo100"
    />
  );
};

export default Login;
