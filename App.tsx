import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Logins'>
    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
