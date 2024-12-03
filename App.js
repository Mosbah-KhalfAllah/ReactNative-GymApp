import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import LoginScreen from './screens/LoginScreen';
import YogaScreen from './screens/YogaScreen';
import HIITScreen from './screens/HIITScreen';
import BoxScreen from './screens/BoxScreen';
import CardioScreen from './screens/CardioScreen';
import MusculationScreen from './screens/MusculationScreen';
import CoachesScreen from './screens/CoachesScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import ContactScreen from './screens/ContactScreen';

import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6347',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Musculation" component={MusculationScreen} />
        <Stack.Screen name="Yoga" component={YogaScreen} />
        <Stack.Screen name="HIIT" component={HIITScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Coaches" component={CoachesScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cardio" component={CardioScreen} />
        <Stack.Screen name="Programs" component={ProgramsScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
