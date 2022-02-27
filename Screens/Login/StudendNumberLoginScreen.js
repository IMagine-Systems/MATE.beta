import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Input} from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
// firebase db 경로 불러오기
import { db } from '../../Database/DatabaseConfig/firebase';
// firebase db read 모듈 불러오기
import { doc, getDoc } from 'firebase/firestore';
// 회원정보 기본데이터 틀(기반) 불러오기
import { UserInfo } from '../../Database/Data/User/userInfo';


const StudendNumberLoginScreen = ({navigation}) => {
    const [studentNumber, SetStudentNumber] = useState('');     // 학번
    const [password, SetPassword] = useState('');               // 비밀번호
    const [signIn, SetSignIn] = useState(false);

    let readDoc = {};                         // firebase에서 읽어온 데이터를 선언 할 변수이다.
    let userInfoDatas = [];                   // firebase에서 유저 

    // firebase db 회원정보 불러오기, 로그인 기능 포함
    const Read = () => {
      // 회원정보 문서 db 불러오기
      const myDoc = doc(db, 'CollectionNameCarpoolTicket', 'UserInfo');           //???

      getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          readDoc = snapshot.data();
          userInfoDatas = readDoc.UserInfo;
          console.log(userInfoDatas[0]);

          for (let i = 0; i < userInfoDatas.length; i++) {
            if (userInfoDatas[i].student_number === studentNumber && userInfoDatas[i].password === password) {
              SetSignIn(true);
            }
          }
        }
      })
      .catch((error) => alert(error.messeage));
    }
    
    /*
    // useEffect
    useEffect (() => {
      Read(); // Firebase의 문서들을 불러온다.
    },[]);
    */

    /*
    // 로그인 기능 함수
    const SignIn = () => {
      for (let i = 0; i < userInfoDatas.length; i++) {
        Read();
        if (userInfoDatas[i].student_number === studentNumber && userInfoDatas[i].password === password) {
          SetSignIn(true);
        }
      }
    };
*/

    return (
    <View style={styles.container}>
      <Input
        placeholder='학번을 입력해 주세요'
        label="학번"
        leftIcon={{ type: 'material', name: 'school'}}   //name: 에 알맞는 명령어 입력시 아이콘 변경됨
        value={studentNumber}
        onChangeText={Text => SetStudentNumber(Text)}
      />

      <Input
        placeholder='비밀번호를 입력해 주세요'
        label="비밀번호"
        leftIcon={{ type: 'material', name: 'lock'}} 
        value={password}
        onChangeText={Text => SetPassword(Text)}
        secureTextEntry                                 //글자를 ***로 변경해줌
      />

     
    <View style={styles.buttonGap}>
      <TouchableOpacity style={styles.buttonStyle} onPress={
          () => {
            // 로그인 (학번을 보고 읽어온 회원 db를 하나씩 비교하는 알고리즘으로 설계 하였다.)
            Read();
            if (signIn === true) {
              alert("로그인 성공");
              navigation.navigate("Main");
            }
            else {
              alert("학번 또는 비밀번호 잘못 입력 했습니다.");
            }
          }
        }>
        <Text style= {styles.SignUpText}>로그인</Text>
      </TouchableOpacity>  
      </View>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style= {styles.SignUpText}>회원가입</Text>
      </TouchableOpacity>  
    </View>
  )
}

export default StudendNumberLoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
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
  SignUpText: {
    fontSize: 17,
    color: "#FFFFFF",
  },
});