import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Iformation from "./Iformation";
 
const Stack = createStackNavigator();

export default class App extends React.Component {
    
    render() {
        return (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
            > 
              <Stack.Screen name="Login" component={Login} /> 
              <Stack.Screen name="Iformation" component={Iformation} />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}