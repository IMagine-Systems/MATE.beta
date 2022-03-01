import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// 아이콘(원격주소)
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({navigation})  {

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <View style={styles.profile_info}>
                    <Image style={styles.profile_img} source={require('../../profile_img1.jpeg')}/>
                    <Text style={styles.user_name_text}>손민석</Text>
                    
                </View>

                <View style={styles.button}>
                    <TouchableOpacity 
                        style={
                            {
                                backgroundColor: "#151515", 
                                paddingHorizontal: 140,
                                paddingVertical: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                                borderRadius: 8,
                                borderWidth: 4,
                            }
                        }
                    >
                        <Text style={{color: "#FFFFFF", fontSize: 14}}>FOLLOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={
                            {
                                backgroundColor: "#FFFFFF",
                                paddingHorizontal: 130,
                                paddingVertical: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 8,
                                borderWidth: 4,
                            }
                        }
                    >
                        <Text>MESSAGE</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.center}>
                <ScrollView>
                    
                    <View style={styles.ticket}>
                        <View style={{flexDirection:'row', padding: 10, borderBottomWidth: 2, borderColor: "#F0F0F0"}}>
                            <Text style={{marginLeft: 20, fontSize: 16,}}>Order No238562312</Text>
                            <Text style={{marginLeft: 45, fontSize: 13, color: "#909090"}}>2022/03/01</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Text style={{marginLeft: 30, fontSize: 16,}}>Quantity: 03</Text>
                            <Text style={{marginLeft: 36, fontSize: 16,}}>Total Amount: $150</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 35}}>
                            <Text style={{marginLeft: 30, fontSize: 16,}}>Detail</Text>
                            <Text style={{marginLeft: 145, fontSize: 16,}}>Processing</Text>
                        </View>
                    </View>

                    <View style={styles.ticket}>
                        <View style={{flexDirection:'row', padding: 10, borderBottomWidth: 2, borderColor: "#F0F0F0"}}>
                            <Text style={{marginLeft: 20, fontSize: 16,}}>Order No238562312</Text>
                            <Text style={{marginLeft: 45, fontSize: 13, color: "#909090"}}>2022/03/01</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Text style={{marginLeft: 30, fontSize: 16,}}>Quantity: 03</Text>
                            <Text style={{marginLeft: 36, fontSize: 16,}}>Total Amount: $150</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 35}}>
                            <Text style={{marginLeft: 30, fontSize: 16,}}>Detail</Text>
                            <Text style={{marginLeft: 145, fontSize: 16,}}>Processing</Text>
                        </View>
                    </View>
                        
                </ScrollView>
            </View>
            

            <View style={styles.footer}>
                <Fontisto name="comment" size={24} color="black" style={styles.messege_icon}/>
                
                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <Fontisto name="home" size={24} color="black" style={styles.home_icon}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Fontisto name="plus-a" size={24} color="black" style={styles.plus_icon}/>
                </TouchableOpacity>
                
                <Fontisto name="bookmark" size={24} color="black" style={styles.save_icon}/>
                
                <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                    <Ionicons name="person-outline" size={24} color="black" style={styles.profile_icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create( {
        container: {
            flex: 1,
            backgroundColor: "#315EFF"
        },
        header: {
            flex: 2.9,
            justifyContent: 'center',
            alignItems: 'center',
        },
        center: {
            flex: 2,
            backgroundColor: '#739BE1',
            marginBottom: 25,
            marginHorizontal: 20,
            borderRadius: 15,
        },
        profile_info: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        profile_img: {
            resizeMode: 'stretch', 
            width: 128.0, 
            height: 128.0, 
            borderRadius: 63, 
            marginTop: 9.9, 
            marginLeft: 10
        },
        user_name_text: {
            fontSize: 36,
            marginTop: 32,
            color: "#FFFFFF",
        },
        button: {
            marginTop: 10,
        },
        ticket: {
            backgroundColor: '#FFFFFF',
            marginTop: 20,
            paddingVertical: 20,
            marginLeft:15,
            marginRight: 15,
            borderRadius: 12,
            
        },
        footer: {
            flex: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: "#FFFFFF",
        },

        messege_icon: {
            marginLeft: 32,
        },
        home_icon: {
        },
        plus_icon: {
        },
        save_icon: {
        },
        profile_icon: {
            marginRight: 29,
        },
    }
);