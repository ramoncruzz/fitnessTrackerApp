/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {StatusBar} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {Workouts, Progress, Profile} from '../pages';
import {ThemeProvider} from 'react-native-magnus';
import Styles from './styles';
import {AppContext} from '../store';
import {useAppContext} from '../hooks';

const Tab = createMaterialBottomTabNavigator();

const RootStack = () => (
  <Tab.Navigator
    initialRouteName="Workout"
    activeColor={Styles.activeColor.backgroundColor}
    barStyle={Styles.tabBar}>
    <Tab.Screen
      name="Workout"
      component={Workouts}
      options={{
        tabBarLabel: 'Workout',
        tabBarIcon: ({color}) => (
          <MaterialIcons name="fitness-center" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Progress"
      component={Progress}
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

const AppNavigator = () => {
  const {context} = useAppContext();
  return (
    <ThemeProvider>
      <AppContext.Provider value={context}>
        <NavigationContainer>
          <StatusBar barStyle="default" backgroundColor="transparent" />
          <RootStack />
        </NavigationContainer>
      </AppContext.Provider>
    </ThemeProvider>
  );
};
export default AppNavigator;
