import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import ExamplePage from '../screens/ExamplePage';

const MainPageStack = createNativeStackNavigator();

export const MainPageNavigator = () => {
  return (
    <MainPageStack.Navigator>
      <MainPageStack.Screen
        name="Main Page"
        component={Main}
        options={{ headerShown: false }}
      />
      <MainPageStack.Screen name="Example Page" component={ExamplePage} />
    </MainPageStack.Navigator>
  );
};
