import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Routes} from '../utilities/Routes';

const BottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions: any = {
    headerShown: false,
    headerLeft: () => null,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: '#99999c',
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: 600,
      paddingBottom: 10,
    },
    tabBarStyle: {
      backgroundColor: '#abcdef',
      height: 70,
      paddingTop: 10,
    },
  };

  return (
    <Tab.Navigator initialRouteName={Routes.Home} screenOptions={screenOptions}>
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
