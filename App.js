import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User' screenOptions={{
        drawerActiveBackgroundColor: '#72dc54',
        drawerActiveTintColor: '#2343f6',
        drawerStyle: {backgroundColor: '#3cebfa'}
      }}>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
          headerStyle: {backgroundColor: '#3c0a6b'},
          headerTintColor: 'white',
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({color, size}) => (
            <Ionicons name='home'color={color} size={size} />
          )
        }} />
        <Drawer.Screen name='User' component={UserScreen}  options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name='person'color={color} size={size} />
          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
