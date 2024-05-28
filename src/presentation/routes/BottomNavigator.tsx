import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/settings/SettingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => <Text style={{ color }}>Home</Text>
      }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => <Text style={{ color }}>Profile</Text>
      }} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => <Text style={{ color }}>Settings</Text>
      }} name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigator