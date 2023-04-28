import React from 'react';
import {Div} from 'react-native-magnus';

import {trackPageView} from '../../utils/trackTestID';

const namePageForTesting = 'progress';
const Progress: React.FC = (): JSX.Element => {
  return (
    <Div
      testID={trackPageView(namePageForTesting, 'page')}
      flex={1}
      bg="indigo100"
    />
  );
};

export default Progress;
