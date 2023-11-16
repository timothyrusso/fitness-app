import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';
import ExamplePage from '../screens/ExamplePage';
import ExamplePageSecond from '../screens/ExamplePageSecond';
import ProfilePage from '../screens/Profile/Profile';

const MainPageStack = createNativeStackNavigator();

export const MainPageNavigator = () => {
  return (
    <MainPageStack.Navigator>
      <MainPageStack.Screen
        name="Main Page"
        component={Main}
        options={{ headerShown: false }}
      />
      <MainPageStack.Screen name="Example Page" component={ExamplePageSecond} />
      <MainPageStack.Screen name="Profile Page" component={ProfilePage} />
      <MainPageStack.Screen
        name="Exercise Page"
        component={ExamplePage}
        options={{ headerShown: true }}
      />
    </MainPageStack.Navigator>
  );
};
