import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './home';
import { Login } from './login';
import { Register } from './register';
import { ForgotPassword } from './forgot-password';
import { Dashboard } from './dashboard';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

export function Screens() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={ { headerShown: false } }>
      <Stack.Screen name="Home" component={ Home }/>
      <Stack.Screen name="Login" component={ Login }/>
      <Stack.Screen name="Register" component={ Register }/>
      <Stack.Screen name="ForgotPassword" component={ ForgotPassword }/>
      <Stack.Screen name="Dashboard" component={ Dashboard }/>
    </Stack.Navigator>
  );
}
