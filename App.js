//import 순서는 react, navigation, stack, text view ... , 다음은 계속해서 바뀌면서 순위 설정
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";                            //손가락 제스처 관련 파일

//아래는 import 페이지
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";
import StudendNumberLoginScreen from './Screens/Login/StudendNumberLoginScreen';
import SignUpScreen from "./Screens/Login/SignUpScreen";


const Stack = createStackNavigator();

export default class App extends React.Component {
    
    render() {
     
        return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>    
               
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="StudendNumberLoginScreen" component={StudendNumberLoginScreen} /> 
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> 
              <Stack.Screen name="Main" component={Main} />

            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}

//Stack.Navigator 위 아래 한칸씩 띄우기, 나머지 명령어들은 스페이스