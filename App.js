import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";
import StudendNumberLoginScreen from './Screens/Login/StudendNumberLoginScreen';
import SignUpScreen from "./Screens/Login/SignUpScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
    
    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
            > 
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="StudendNumberLoginScreen" component={StudendNumberLoginScreen} /> 
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> 
              <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}