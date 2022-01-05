import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, PermissionsAndroid } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Footer } from '../Footer';
import * as RNFS from 'react-native-fs';

const readData = async (setUserData) => {
    

            var path = RNFS.DocumentDirectoryPath + '/data.json';
            RNFS.readFile(path)

                .then((success) => {
                    console.log(RNFS.DocumentDirectoryPath, "path")
                    console.log('read file', success);
                    setUserData(JSON.parse(success))
                })
                .catch((err) => {
                    console.log(RNFS.DocumentDirectoryPath, "path error")
                    console.log(err.message);
                });
        } 
const loginValidation = Yup.object().shape({
    Email: Yup.string()
        .nullable()
        .email('Invalid email addresss')
        .required('Please enter your Email'),
    Password: Yup.string()
        .required('Please enter your Password')
        .min(8, 'Password is too short - should be 8 characters minimum.')
        .max(15, 'Password is too long - should be 13 characters maximum')
});

const LoginPage = (props) => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        readData(setUserData);
    }, [])
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground source={require('../images/login.jpg')} style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>
                    <View style={{ flex: .6, flexDirection: 'column', paddingVertical: 40 }}>
                        <Text style={styles.text1}>Welcome</Text>
                        <Text style={styles.text2}>LogIn</Text>
                    </View>
                    <Formik
                        initialValues={{
                            Email: '',
                            Password: '',
                        }}
                        validationSchema={loginValidation}
                        onSubmit={(values) => {
                            setTimeout(() => {
                                const userDataTemp = [...userData];
                                setUserData(userDataTemp)
                                const isExist = userDataTemp.some(item => {
                                    return item.Email === values.Email && item.Password === values.Password
                                })
                                if (!isExist) {
                                    alert("Invalid Email or Password")
                                }
                                else {
                                    props.navigation.navigate("dashboard")
                                }
                            }, 500)

                        }}
                    >
                        {({ errors, values, touched, handleSubmit, setFieldValue }) => {
                            console.log(values, 'values')
                            return <View style={{ flex: 2.5, marginLeft: 30, flexDirection: 'column', paddingVertical: 10 }}>
                                <View style={{ justifyContent: 'center', flexDirection: 'column', paddingVertical: 10 }}>
                                    <TextInput
                                        style={styles.emailInput}
                                        placeholder="Email"
                                        placeholderTextColor="#EEEEEE"
                                        value={values.Name}
                                        name="Email"
                                        onChangeText={(text) => setFieldValue('Email', text)}
                                    />
                                    {errors.Email && touched.Email &&
                                        <Text style={styles.error}>{errors.Email}</Text>
                                    }
                                    <TextInput
                                        style={styles.passwordInput}
                                        placeholder="Password"
                                        placeholderTextColor="#EEEEEE"
                                        value={values.Password}
                                        secureTextEntry
                                        name="Password"
                                        onChangeText={(text) => setFieldValue('Password', text)}
                                    />
                                    {errors.Password && touched.Password &&
                                        <Text style={styles.error}>{errors.Password}</Text>
                                    }
                                </View>
                                <View style={{ flex: .9, flexDirection: 'column', paddingVertical: 20 }}>
                                    <View style={styles.buttonContainer1}>
                                        <TouchableOpacity onPress={handleSubmit}>
                                            <Text style={styles.buttonText1}>
                                                Log In
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[styles.buttonContainer1, { backgroundColor: 'rgb(223,234,228)', marginBottom: 95 }]}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                                            <Text style={styles.buttonText2}>
                                                Back To Home
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        }}
                    </Formik>
                </ImageBackground>
            </ScrollView>
            <Footer />
        </View>
    )
}
const styles = StyleSheet.create({

    text1: {
        color: '#fff',
        fontSize: 30,
        color: '#1C5B0B'
    },
    text2: {
        color: '#fff',
        fontSize: 30,
        color: '#1C5B0B'
    },
    passwordInput: {
        width: '80%',
        height: 40,
        color: 'grey',
        marginVertical: 15,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
    },
    emailInput: {
        height: 40,
        width: '80%',
        marginVertical: 15,
        color: 'grey',
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
    },
    buttonText1: {
        fontSize: 13,
        color: "#F2FFFA",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    buttonText2: {
        fontSize: 13,
        color: "#0E5135",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    buttonContainer1: {
        width: '85%',
        marginBottom: 25,
        backgroundColor: 'rgb(0,85,46)',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 35,
    },
    error: {
        color: '#f00',
        fontSize: 9,
        marginTop: -5
    },
})
export default LoginPage;