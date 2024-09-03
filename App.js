// In App.js in a new porject

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MainScreen from './src/screens/MainScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="MainScreen" 
        component={MainScreen} 
        options={{
          headerShown: false,
        }} />
        <Stack.Screen
        name="RecipeDetailScreen" 
        component={RecipeDetailScreen} 
        options={{
          title: 'Recipe Detail',
          headerTransparent: true,
          }}
        />
          </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App;