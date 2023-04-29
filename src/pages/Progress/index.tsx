import * as React from 'react';
import {Div, Text} from 'react-native-magnus';

import {trackPageView} from '../../utils/trackTestID';
import {useAppContext} from '../../hooks';

const namePageForTesting = 'progress';
const Progress: React.FC = (): JSX.Element => {
  const {context} = useAppContext();
  return (
    <Div
      testID={trackPageView(namePageForTesting, 'page')}
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="indigo100">
      <Text fontWeight="bold" fontSize={15}>
        context with variable "Env" hosted on Firebase remote config
      </Text>
      <Text fontWeight="500" fontSize={10}>
        {JSON.stringify(context, null, '\t')}
      </Text>
    </Div>
  );
};

export default Progress;
