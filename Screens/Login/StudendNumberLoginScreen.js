// 학번 로그인 컴포넌트이다.

import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements';

const StudendNumberLoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Input
        placeholder='학번을 입력해 주세요'
        label="학번"
        leftIcon={{ type: 'material', name: 'school'}}   //name: 에 알맞는 명령어 입력시 아이콘 변경됨
        value={email}
        onChangeText={Text => setEmail(Text)}
        />
       <Input
        placeholder='비밀번호를 입력해 주세요'
        label="비밀번호"
        leftIcon={{ type: 'material', name: 'lock'}} 
        value={password}
        onChangeText={Text => setPassword(Text)}
        secureTextEntry //글자를 ***로 변경해줌
        />
       <Button title='로그인' style={styles.button} />
       <Button title='회원가입' style={styles.button} onPress={() => navigation.navigate("SignUpScreen")} />
    </View>
  )
}

export default StudendNumberLoginScreen

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
        flex:1,
        //alignContent:'center' 
        alignItems: 'center',           //중앙으로 옮김 정확한 명령어 의미 필요
        justifyContent: 'center'        //중앙으로 옮김 정확한 명령어 의미 필요
    }
});