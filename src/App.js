/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/Login';
import RegistrationPage from './screens/RegistrationPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {

  return (

   

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LandingPage}
      />
      <Stack.Screen
        name="Friends"
        component={LoginPage}
      />
    </Stack.Navigator>
      </NavigationContainer >
      
    );
};

export default App;
