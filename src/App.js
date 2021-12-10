/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/Login';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = (props) => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={LandingPage}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{ title: '', headerShown: false }}
        />
         <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

