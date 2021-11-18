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

const App = () => {

  return (
<Router>
      <Scene key="root">
        <Scene key="landing" component={LandingPage} title="Landing" initial={true} />
        <Scene key="login" component={LoginPage} title="Login" />
        <Scene key="registration" component={RegistrationPage} title="Registration" />
      </Scene>
    </Router>  );
};

export default App;
