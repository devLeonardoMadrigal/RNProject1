import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { WeatherContextProvider } from './store/context/WeatherContext';
import LocalStorageScreen from './screens/LocalStorageScreen';
import { RootStackParams } from './types/RootStackParamList';

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
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LocalStorage"
            component={LocalStorageScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherContextProvider>
  );
}
