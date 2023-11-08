import React from 'react';
import styles from './TabMenu.style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ExamplePage from '../../screens/ExamplePage';
import ExamplePageSecond from '../../screens/ExamplePageSecond';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const TabMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={40} style={{ flex: 1 }} />
        ),
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'white',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Main page"
        component={ExamplePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={20} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ExamplePageSecond}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={20} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExamplePage}
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color }) => (
            <Ionicons name="link" color={color} size={20} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ExamplePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="body" color={color} size={20} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabMenu;
