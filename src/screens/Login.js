import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Footer } from '../Footer';

const image = { uri: "https://i.pinimg.com/originals/c2/f2/f6/c2f2f63868aa3d12c1b4519dc0f42fac.jpg" }

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

    return (
        <View style={styles.loginContainer}>
            <ImageBackground source={require('../images/login.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.heading}>
                    <Text style={styles.loginRegisterHeading}>Welcome</Text>
                    <Text style={styles.loginRegisterHeading1}>Log</Text>
                    <Text style={styles.loginRegisterHeading2}>In</Text>
                </View>
                <Formik
                    initialValues={{
                        Email: '',
                        Password: '',
                    }}
                    validationSchema={loginValidation}
                    onSubmit={(values) => {
                        console.log(values, "users");
                        setTimeout(() => {
                            alert('User registered successfully')
                        }, 500)
                    }}
                >
                    {({ errors, values, touched, handleSubmit, setFieldValue }) => {
                        console.log(values, 'values')

                        return <View style={styles.mainContainer}>

                            <View style={styles.container}>
                                <TextInput
                                    style={styles.emailInput}
                                    placeholder="Email"
                                    placeholderTextColor="#EEEEEE"
                                    value={values.Email}
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
                                    name="Password"
                                    onChangeText={(text) => setFieldValue('Password', text)}
                                />
                                {errors.Password && touched.Password &&
                                    <Text style={styles.error}> {errors.Password}</Text>
                                }
                                <View style={styles.buttonContainer1}>
                                    <TouchableOpacity onPress={handleSubmit}>
                                        <Text style={styles.buttonText1}>
                                            Log In
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonContainer2}>
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
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#f5fffa'
    },
    heading: {
        flexDirection: 'row',
        marginTop: 65,
        marginLeft: 35
    },
    loginRegisterHeading: {
        marginLeft: 5,
        fontSize: 30,
        color: '#1C5B0B',
    },
    loginRegisterHeading1: {
        marginTop: 40,
        marginLeft: -163,
        fontSize: 30,
        color: '#1C5B0B',
    },
    loginRegisterHeading2: {
        marginTop: 40,
        fontSize: 30,
        color: '#1C5B0B',
    },
    mainContainer: {
        marginTop: 50
    },
    container: {
        marginLeft: 50,
        marginTop: 20
    },
    passwordInput: {
        width: '80%',
        height: 40,
        marginTop: 50,
        color: 'grey',
        paddingLeft: 4,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
    },
    emailInput: {
        height: 40,
        width: '80%',
        marginTop: 5,
        color: 'grey',
        paddingLeft: 4,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
    },
    buttonContainer1: {
        marginLeft: 0,
        borderWidth: 0.1,
        width: '80%',
        height: '15%',
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: 'rgb(0,85,46)',
        paddingLeft: 70,
        paddingTop: 13,
        paddingRight: 90,
        borderRadius: 35,
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
    buttonContainer2: {
        marginLeft: 0,
        borderWidth: 0.1,
        borderRadius: 35,
        width: '80%',
        height: '15%',
        backgroundColor: 'rgb(223,234,228)',
        paddingLeft: 30,
        paddingTop: 13,
        paddingRight: 20,
    },

    error: {
        color: '#f00',
        fontSize: 10,
        marginTop: 2,
        padding: 2,
        borderRadius: 5
    },
    image: {
        justifyContent: "center"
    },
})

export default LoginPage;