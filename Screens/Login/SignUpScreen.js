// 학번로그인 -> 회원가입 버튼 클릭하면 회원가입 페이지 화면으로 넘어간다.
import { View, Text, StyleSheet} from "react-native";
import { Input } from 'react-native-elements';
import React, { useState } from 'react';

export default function SignUpScreen() {
    
    const [ studentNumber, SetStudentNumber ] = useState("");
    const [ password, SetPassword ] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.title_text}>MATE 회원가입</Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
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
                    onChangeText={Text => setPassword(Text)}
                    secureTextEntry //글자를 ***로 변경해줌
                />
                <Input
                    placeholder='학번을 입력해 주세요'
                    label="학년"
                    leftIcon={{ type: 'material', name: 'school'}}   //name: 에 알맞는 명령어 입력시 아이콘 변경됨
                    value={studentNumber}
                    onChangeText={Text => SetStudentNumber(Text)}
                />
                <Input
                    placeholder='비밀번호를 입력해 주세요'
                    label="학과"
                    leftIcon={{ type: 'material', name: 'lock'}} 
                    value={password}
                    onChangeText={Text => setPassword(Text)}
                    secureTextEntry //글자를 ***로 변경해줌
                />
                <Input
                    placeholder='학번을 입력해 주세요'
                    label="성명"
                    leftIcon={{ type: 'material', name: 'school'}}   //name: 에 알맞는 명령어 입력시 아이콘 변경됨
                    value={studentNumber}
                    onChangeText={Text => SetStudentNumber(Text)}
                />
                <Input
                    placeholder='비밀번호를 입력해 주세요'
                    label="거주지"
                    leftIcon={{ type: 'material', name: 'lock'}} 
                    value={password}
                    onChangeText={Text => setPassword(Text)}
                    secureTextEntry //글자를 ***로 변경해줌
                />
                <Input
                    placeholder='비밀번호를 입력해 주세요'
                    label="계정"
                    leftIcon={{ type: 'material', name: 'lock'}} 
                    value={password}
                    onChangeText={Text => setPassword(Text)}
                    secureTextEntry //글자를 ***로 변경해줌
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            
        },
        header: {
            flex: 0.1,
            backgroundColor: '#315EFF',
            justifyContent: 'center',
            alignItems: 'center',
        },

        title: {

        },

        title_text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFFFF',
        },

        inputContainer: {
            flex: 2,
            marginTop: 10,
        },

    }
);