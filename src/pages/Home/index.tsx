import React from 'react';
import {SafeAreaView} from 'react-native';
import {Div} from 'react-native-magnus';

import {trackPageView} from '../../utils/trackTestID';

import Styles from './styles';

const namePageForTesting = 'home';
const Home: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={Styles.page}>
      <Div
        testID={trackPageView(namePageForTesting, 'page')}
        flex={1}
        bg="green"
      />
    </SafeAreaView>
  );
};

export default Home;
