import React from 'react';
import styles from './TabMenu.style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ExamplePage from '../../screens/ExamplePage';
import ExamplePageSecond from '../../screens/ExamplePageSecond';
import { BlurView } from 'expo-blur';
import ProfilePage from '../../screens/Profile';

const Tab = createBottomTabNavigator();

const tabsConfig = [
  {
    name: 'Profile page',
    component: ProfilePage,
    icon: 'person',
  },
  {
    name: 'Notifications',
    component: ExamplePageSecond,
    icon: 'body',
  },
  {
    name: 'Exercises',
    component: ExamplePage,
    icon: 'barbell-sharp',
  },
  {
    name: 'Profile',
    component: ExamplePageSecond,
    icon: 'time',
  },
];

console.log(tabsConfig);

const TabMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { ...styles.container },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={40} style={{ flex: 1 }} />
        ),
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabsConfig.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name={tab.icon as keyof typeof Ionicons.glyphMap}
                color={color}
                size={20}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabMenu;