import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import ExamplePage from "../screens/ExamplePage";

const InsideStack = createNativeStackNavigator();

export const MainPageNavigator = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Main Page' component={Main} options={{ headerShown: false }} />
      <InsideStack.Screen name='Example Page' component={ExamplePage} />
    </InsideStack.Navigator>
  )
}