import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Main from './app/screens/Main';
import ExamplePage from './app/screens/ExamplePage';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

const InsideLayout = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Main Page' component={Main} options={{ headerShown: false }} />
      <InsideStack.Screen name='Example Page' component={ExamplePage} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, [])

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Logins'>
    {user ? <Stack.Screen name='Main' component={InsideLayout} options={{ headerShown: false }} /> : <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
    </Stack.Navigator>
  </NavigationContainer>
  );
}
