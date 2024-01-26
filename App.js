import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import JiuScreen from './screens/JiuScreen';
import AthleteVideoScreen from './screens/AthleteVideoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AthleteVideo">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Jiu-Jitsu" component={JiuScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AthleteVideo" component={AthleteVideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
