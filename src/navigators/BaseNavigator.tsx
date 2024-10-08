import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {Routes} from '../utilities/Routes';

const Stack = createStackNavigator();

const BaseNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.BottomTabNavigator}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        headerLeft: () => null,
      }}>
      <Stack.Screen
        name={Routes.BottomTabNavigator}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default BaseNavigator;
