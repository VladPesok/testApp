import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
//import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import User from '../screens/User';

const Stack = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="User" component={User}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;