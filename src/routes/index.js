import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useGlobal} from '../context/global';
import {
  SplashScreen,
  SettingsScreen,
  DashboardScreen,
} from '../screens';

import {styleApp} from '../assets/styleApp';

const Stack = createStackNavigator();

const MainRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Dashboard"
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  const {globalProps} = useGlobal();

  return globalProps?.isAppLoading ?
    <SplashScreen />
  : 
    <MainRoutes />
};