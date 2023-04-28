import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {trackPageView} from '../../utils/trackTestID';

import Styles from './styles';

const namePageForTesting = 'Tracker';
const Tracker: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={Styles.page}>
      <View
        testID={trackPageView(namePageForTesting, 'page')}
        style={Styles.container}
      />
    </SafeAreaView>
  );
};

export default Tracker;
