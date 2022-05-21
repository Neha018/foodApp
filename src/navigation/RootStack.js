import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RestaurantScreen} from '../screen/RestaurantScreen';
import {HomeScreen} from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
