import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Login({ navigation }) {
  return (
    // Title
    <View style={styles.container}>
      <View style={styles.loginPageLogoContainer}>
        <Text style={styles.loginPageLogoText}>MATE</Text> 
      </View>
      
      <View style={styles.loginContainer}>
        <View style={styles.buttonGap}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("StudendNumberLoginScreen")}>
            <Text style= {styles.StudendNumberLoginText}>학번 로그인</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Main")}>
          <Text style= {styles.kakaoLoginText}>카카오 로그인</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  loginPageLogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#315EFF',
    borderBottomLeftRadius: 55, // borderRadius -> borderBottomLeftRadius, borderTopLeftRadius,...
  },
  loginPageLogoText: {
    fontWeight: 'bold', 
    fontSize: 64, 
    color: '#FFFFFF',
  },
  //컨테이너가 바뀌면 한칸 비우기
  loginContainer: {
    flex: 1,                      
    justifyContent: 'center', 
    alignItems: 'center',
  },
  //버튼에 Text 중앙에 해주는 옵션을 넣어줘어야 한다.
  buttonStyle: {                  
    justifyContent: 'center',              //Text 중앙
    alignItems: 'center',                  //Text 중앙
    height: 52,                            //버튼 높이
    width: 300,                            //버튼 넓이
    borderRadius:17,
    backgroundColor: "#007AFF",
  },
  buttonGap: {
    marginBottom: 15,
  },
  StudendNumberLoginText: {
    fontSize: 17,
    color: "#FFFFFF",
  },
  kakaoLoginText: {
    fontSize: 17, 
    color: "#FFFFFF",
  },
});

export default Login;