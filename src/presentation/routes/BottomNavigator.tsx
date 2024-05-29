import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import SettingScreen from '../screens/settings/SettingScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { styles } from '../../config/app-theme';
import { useCounterStore } from '../store/counter-store';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  const counter = useCounterStore( state => state.counter )

  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 16 }}>Home</Text>,
        tabBarLabel: () => <></>
      }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 16 }}>Profile</Text>,
        tabBarLabel: () => <></>
      }} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 16 }}>Settings</Text>,
        tabBarLabel: () => <></>,
        headerTitle:(props) => <Text style={styles.title}>Counter {counter}</Text>,
      }} name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigator