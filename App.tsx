import 'react-native-reanimated';
import 'react-native-worklets-core';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import LocalStorageScreen from './screens/LocalStorageScreen';
import { WeatherContextProvider } from './store/context/WeatherContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="HomeMain"
        component={HomeScreen as any}
        initialParams={{ name: 'User' }}
      />
    </TopTab.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ellipse';

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'StorageTab') {
            iconName = focused ? 'folder' : 'folder-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={TopTabNavigator}
        options={{ title: 'Home' }}
      />
      <BottomTab.Screen
        name="StorageTab"
        component={LocalStorageScreen as any}
        options={{ title: 'Storage' }}
      />
    </BottomTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={32} color="#000000" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen
        name="Login"
        component={LoginScreen as any}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ title: 'App Dashboard' }}
      />

      <Drawer.Screen
        name="LocalStorage"
        component={LocalStorageScreen as any}
        options={{ title: 'Local Storage' }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <WeatherContextProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </WeatherContextProvider>
  );
}
