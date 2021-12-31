import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieDBInterface';

//Forma en la que definiremos que parametros recibe o no una ruta
export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'white',
  },
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
