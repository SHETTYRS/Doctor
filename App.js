import React from 'react';
import { Login } from './app/views/Login.js';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu } from './app/views/Menu.js';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Mobile } from './app/views/Mobile.js';
import { Fruits } from './app/views/Fruits.js';
import { Detail } from './app/views/Detail.js';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Login">
          <Stack.Screen name = "Login"  component = {Login} options = {{headerShown:false}}/>
          <Stack.Screen name = "Menu" component = {Menu}/>
          <Stack.Screen name = "Mobile" component = {Mobile}/>
          <Stack.Screen name = "Fruits" component = {Fruits}/>
          <Stack.Screen name = "Detail" component = {Detail}/>
        </Stack.Navigator>

      </NavigationContainer>
    );

  }
}


