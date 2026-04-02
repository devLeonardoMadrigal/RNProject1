import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { WeatherContextProvider } from './store/context/WeatherContext';

export type RootStackParams = {
  Login: undefined;
  Home: { name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export default function App() {
  return (
    <WeatherContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherContextProvider>
  );
}
