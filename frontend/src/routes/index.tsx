import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenTeste from '../screens/ScreenTeste/index'
import Home from '../index';


const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ScreenTeste" component={ScreenTeste} />  
    </Stack.Navigator>  
  </NavigationContainer>
)