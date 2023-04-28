import React from 'react';
import {trackPageView} from '../../utils/trackTestID';
import {Div, Text} from 'react-native-magnus';

const pageNameForTesting = 'profile';
const Profile: React.FC = (): JSX.Element => (
  <Div
    flex={1}
    testID={trackPageView(pageNameForTesting, 'page')}
    alignItems="center"
    justifyContent="center"
    bg="indigo100">
    <Text>03</Text>
  </Div>
);

export default Profile;
