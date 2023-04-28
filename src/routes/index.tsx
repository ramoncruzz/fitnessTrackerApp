/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {StatusBar} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Workouts, Profile} from '../pages';
import {ThemeProvider} from 'react-native-magnus';
import Styles from './styles';

const Tab = createMaterialBottomTabNavigator();

const RootStack = () => (
  <Tab.Navigator
    initialRouteName="Workout"
    activeColor={Styles.activeColor.backgroundColor}
    barStyle={Styles.tabBar}>
    <Tab.Screen
      name="Workout"
      component={Home}
      options={{
        tabBarLabel: 'Workout',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="fitness-center" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Progress"
      component={Workouts}
      options={{
        tabBarLabel: 'Progress',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="leaderboard" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="account-circle" color={color} size={30} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <ThemeProvider>
    <NavigationContainer>
      <StatusBar barStyle="default" backgroundColor="transparent" />
      <RootStack />
    </NavigationContainer>
  </ThemeProvider>
);
export default AppNavigator;