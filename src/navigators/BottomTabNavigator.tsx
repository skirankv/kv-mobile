import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Routes} from '../utilities/Routes';
import TabIcon from '../components/TabIcon';

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
      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon tab={Routes.Home} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon tab={Routes.Profile} focused={focused} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
