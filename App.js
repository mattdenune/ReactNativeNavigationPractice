import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User'>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} />
        <Drawer.Screen name='User' component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
