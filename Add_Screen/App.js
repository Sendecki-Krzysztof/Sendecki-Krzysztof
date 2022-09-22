import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './Pages/Test';
import Add from './Pages/Add';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Test'  screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Test' component= {Test}/>
        <Stack.Screen name = 'Add' component= {Add}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;
