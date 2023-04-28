import * as React from 'react';
import {StatusBar} from 'react-native';
// import {BottonBar} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Workouts, Profile} from '../pages';

const Tab = createBottomTabNavigator();

const RootStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Chat" component={Workouts} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <StatusBar barStyle="default" backgroundColor="transparent" />
    <RootStack />
  </NavigationContainer>
);
export default AppNavigator;
