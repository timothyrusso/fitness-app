import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main/Main';
import ExamplePageSecond from '../screens/ExamplePageSecond';
import ProfilePage from '../screens/Profile/Profile';
import ExercisePage from '../screens/ExercisePage/ExercisePage';

const MainPageStack = createNativeStackNavigator();

export interface RootStackParamList {
  'Main Page': undefined;
  'Example Page': undefined;
  'Profile Page': undefined;
  'Exercise Page': undefined;
}

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
        component={ExercisePage}
        options={{ headerShown: false }}
      />
    </MainPageStack.Navigator>
  );
};
