import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    ScrollView,
    PermissionsAndroid
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Footer } from '../Footer';
import RNPickerSelect from 'react-native-picker-select';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import * as RNFS from 'react-native-fs';

const readData = async (setUserData) => {
    // try {
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //         {
    //             title: "Read Permission",
    //             message:
    //                 "App needs ypur permission to read file",
    //             buttonNeutral: "Ask Me Later",
    //             buttonNegative: "Cancel",
    //             buttonPositive: "OK"
    //         }
    //     );
    //     console.log(granted, "granted")
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         console.log("You can read the file");

            var path = RNFS.DocumentDirectoryPath + '/data.json';
            RNFS.readFile(path)

                .then((success) => {
                    console.log(RNFS.DocumentDirectoryPath, "path")
                    console.log('read file', success);
                    setUserData(JSON.parse(success));
                })
                .catch((err) => {
                    console.log(RNFS.DocumentDirectoryPath, "path error")
                    console.log(err.message);
                });
        } 
const writeData = async (values) => {
    

            var path = RNFS.DocumentDirectoryPath + '/data.json';
            const data = JSON.stringify(values)
            console.log(data, "user")
            // readData();
            RNFS.writeFile(path, data, 'utf8')

                .then((success) => {
                    console.log(RNFS.DocumentDirectoryPath, "path")
                    console.log('FILE WRITTEN!');
                })
                .catch((err) => {
                    console.log(RNFS.DocumentDirectoryPath, "path error")
                    console.log(err.message);
                });
        }

const data = [

    {
        label: 'Male',
        value: 'Male'
    },
    {
        label: 'Female',
        value: 'Female'
    }
];

const registrationValidation = Yup.object().shape({
    Name: Yup.string()
        .nullable()
        .max(15, 'Maximum 15 characters allowed')
        .required('Please enter your Full name'),
    Email: Yup.string()
        .nullable()
        .email('Invalid email addresss')
        .required('Please enter your Email'),
    Password: Yup.string()
        .required('Please enter your Password')
        .min(8, 'Password is too short - should be 8 characters minimum.')
        .max(15, 'Password is too long - should be 13 characters maximum'),
    Date: Yup.string()
        .required("Please select the date"),
    Gender: Yup.string()
        .required("Please select your gender"),
    Qualification: Yup.string()
        .required("Please select your Qualification")
});

const SignUp = (props) => {
    const [userData, setUserData] = useState([])
    const [date, setDate] = useState('');
    useEffect(() => {
        readData(setUserData);
    }, [])
    const placeholder = {
        label: 'Select qualification',
        value: null,
    };
    console.log(userData, "user data");
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground source={require('../images/signUpBAckground.jpg')} style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 20 }}>
                    <View style={{ flex: .6, flexDirection: 'column', paddingVertical: 40 }}>
                        <Text style={styles.text1}>Create Account</Text>
                    </View>
                    <Formik
                        initialValues={{
                            Name: '',
                            Email: '',
                            Password: '',
                            Date: '',
                            Gender: '',
                            Qualification: ''
                        }}
                        validationSchema={registrationValidation}
                        onSubmit={(values) => {
                            console.log(values, "users");
                            setTimeout(() => {
                                // dbService.signupSave(values)
                                const userDataTemp = [...userData];
                                const isExist = userDataTemp.some(item => {
                                    console.log(item.Email, "item email")
                                    console.log(values.Email, "values Email")
                                    return item.Email.toLowerCase() === values.Email.toLowerCase()})
                                    if(!isExist) {
                                        userDataTemp.push(values);
                                        writeData(userDataTemp);
                                        setUserData(userDataTemp);
                                    }
                                alert('User registered successfully')
                                props.navigation.navigate("login")
                            }, 500)
                        }}
                    >
                        {({ errors, values, touched, handleSubmit, setFieldValue }) => {

                            return <View style={{ flex: 2.5, marginLeft: 15, flexDirection: 'column', paddingVertical: 10 }}>

                                <View style={{ justifyContent: 'center', flexDirection: 'column', paddingVertical: 10 }}>
                                    <TextInput
                                        style={styles.nameInput}
                                        placeholder="Full Name"
                                        placeholderTextColor="grey"
                                        value={values.Name}
                                        name="Name"
                                        onChangeText={(text) => setFieldValue('Name', text)}
                                    />
                                    {errors.Name && touched.Name &&
                                        <Text style={styles.error}>{errors.Name}</Text>
                                    }
                                    <TextInput
                                        style={styles.emailInput}
                                        placeholder="Email"
                                        placeholderTextColor="grey"
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
                                        placeholderTextColor="grey"
                                        value={values.Password}
                                        secureTextEntry
                                        name="Password"
                                        onChangeText={(text) => setFieldValue('Password', text)}
                                    />
                                    {errors.Password && touched.Password &&
                                        <Text style={styles.error}>{errors.Password}</Text>
                                    }
                                    <DatePicker
                                        style={styles.datePicker}
                                        date={date} 
                                        mode="date" 
                                        placeholder="Select date"
                                        name="Date"
                                        value={values.Date}
                                        format="DD-MM-YYYY"
                                        minDate="01-01-1950"
                                        maxDate="01-01-2020"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => {
                                            setFieldValue('Date', date);
                                            setDate(date)
                                        }}
                                        customStyles={{

                                            placeholderText: {
                                                color: 'grey'
                                            },
                                            dateInput: {
                                                marginLeft: -115,
                                                marginTop: -10,
                                                border: 0,
                                                borderRadius: 0,
                                                borderColor: '#D3D3D3',
                                                width: '80%',
                                                borderBottomWidth: 0,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderTopWidth: 0
                                            },
                                            dateText: {
                                                color: 'grey'
                                            }
                                        }}
                                    />
                                    {errors.Date && touched.Date &&
                                        <Text style={styles.error}>{errors.Date}</Text>
                                    }
                                    <Text style={styles.gender}>Gender</Text>
                                    <RadioForm
                                        name="Gender"
                                        style={styles.radiobtn}
                                        initial={-1}
                                        value={values.Gender}
                                        formHorizontal={true}
                                        labelHorizontal={true}
                                        radio_props={data}
                                        buttonColor={'#EEE'}
                                        buttonSize={20}
                                        buttonOuterSize={25}
                                        onPress={(label) => {
                                            console.log(label, "gender")
                                            setFieldValue('Gender', label)
                                        }}
                                    />

                                    {errors.Gender && touched.Gender &&
                                        <Text style={styles.error}>{errors.Gender}</Text>
                                    }
                                    <RNPickerSelect
                                        style={pickerSelectStyles.inputAndroid}
                                        placeholder={placeholder}
                                        name="Qualification"
                                        value={values.Qualification}
                                        onValueChange={(value) => {
                                            setFieldValue('Qualification', value)
                                            console.log(value)
                                        }}
                                        style={{
                                            placeholderText: {
                                                color: 'black'
                                            },
                                        }}
                                        items={[
                                            { label: 'Diploma', value: 'Diploma' },
                                            { label: 'Bachelors', value: 'Bachelors' },
                                            { label: 'Masters', value: 'Masters' },
                                            { label: 'Docterate', value: 'Docterate' },
                                        ]}
                                    />
                                    {errors.Qualification && touched.Qualification &&
                                        <Text style={styles.error}>{errors.Qualification}</Text>
                                    }
                                    <View style={{ flex: .9, flexDirection: 'row', paddingVertical: 20 }}>
                                        <View style={styles.buttonContainer1}>
                                            <TouchableOpacity onPress={handleSubmit}>
                                                <Text style={styles.buttonText1}>
                                                    Sign Up
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.buttonContainer2}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                                                <Text style={styles.buttonText2}>
                                                    Home
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        }
                        }
                    </Formik>
                </ImageBackground>
            </ ScrollView>
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
    passwordInput: {
        width: '80%',
        height: 40,
        marginTop: 20,
        color: 'grey',
        paddingLeft: 4,
        marginLeft: 5,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
    },
    emailInput: {
        height: 40,
        width: '80%',
        marginLeft: 5,
        marginTop: 20,
        color: 'grey',
        paddingLeft: 4,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
    },
    nameInput: {
        width: '80%',
        height: 40,
        color: 'grey',
        paddingLeft: 4,
        marginLeft: 5,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
        marginTop: 0
    },
    datePicker: {
        width: '80%',
        height: 40,
        color: '#ebebeb',
        paddingLeft: 4,
        marginLeft: 5,
        borderBottomWidth: 1.9,
        borderBottomColor: '#D3D3D3',
        marginTop: 20
    },
    gender: {
        marginTop: 15,
        color: 'grey',
        marginLeft: 8,
        marginBottom: 10
    },
    radiobtn: {
        display: 'flex',
        width: '80%',
        marginLeft: 9,
    },
    picker: {
        height: 40,
        color: 'grey',
        width: '70%',
        borderWidth: 5,
        borderColor: 'black',
    },
    qualification: {
        marginTop: 20,
        color: 'grey',
        marginLeft: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    buttonContainer1: {
        marginLeft: 0,
        borderWidth: 0.1,
        width: '40%',
        height: '50%',
        marginBottom: 30,
        backgroundColor: 'rgb(0,85,46)',
        paddingLeft: 25,
        paddingTop: 13,
        paddingRight: 20,
        borderRadius: 35,
    },
    buttonText1: {
        fontSize: 12,
        color: "#F2FFFA",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    buttonText2: {
        fontSize: 12,
        color: "#0E5135",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    buttonContainer2: {
        marginLeft: 4,
        marginBottom: 60,
        borderWidth: 0.1,
        borderRadius: 35,
        width: '40%',
        height: '50%',
        backgroundColor: 'rgb(223,234,228)',
        paddingLeft: 25,
        paddingTop: 13,
        paddingRight: 20,
    },
    error: {
        color: '#f00',
        fontSize: 10,
        marginTop: 2,
        padding: 2,
        marginLeft: 5,
        borderRadius: 5,
        position: 'relative'
    },
})
const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 5,
        borderWidth: 0.5,
        borderRadius: 8,
        marginTop: 5,
        width: '85%',
        marginLeft: -8,
        borderBottomWidth: 5.9,
        borderBottomColor: 'red',
    },
})
export default SignUp;