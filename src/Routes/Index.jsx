import LandingPage from './src/screens/LandingPage';
import LoginPage from './src/screens/LoginPage';
import RegistrationPage from './src/screens/RegistrationPage';
import { Router, Scene } from 'react-native-router-flux'

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="landing" component={LandingPage} title="Landing" initial={true} />
        <Scene key="login" component={LoginPage} title="Login" />
        <Scene key="registration" component={RegistrationPage} title="Registration" />
      </Scene>
    </Router>
  )
}

export default Routes;