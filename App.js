import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='User'>
        <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='home' color={color} size={size} />
          )
        }}/>
        <BottomTab.Screen name='User' component={UserScreen}  options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='person' color={color} size={size} />
          )
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
