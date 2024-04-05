// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/loginScreem.js';
import { HomeScreen } from './views/HomeScreem.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Check Onbus' }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Check Onbus' }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}