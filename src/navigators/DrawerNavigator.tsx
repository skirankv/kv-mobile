import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import TabIcon from '../components/TabIcon';
import CustomDrawer from '../components/CustomDrawer';
import MapScreen from '../screens/MapScreen';

const DrawerNavigator: React.FC = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Main Screen"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#B666D2',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          title: 'Main Screen',
          drawerIcon: ({ focused, color }) => (
            <TabIcon focused={focused} color={color} tab="Main" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({ focused, color }) => (
            <TabIcon focused={focused} color={color} tab="Settings" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Polygon"
        component={MapScreen}
        options={{
          title: 'Polygon',
          // drawerIcon: ({ focused, color }) => (
          //   <TabIcon focused={focused} color={color} tab="Settings" />
          // ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
