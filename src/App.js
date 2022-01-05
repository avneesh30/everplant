import React from 'react';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/Login';
import SignUp from './screens/SignUp';
import Details from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import Cactus from './screens/Cactus';

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
        <Stack.Screen
          name="cactus"
          component={Cactus}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{ title: '', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

