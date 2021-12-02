import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { Picker } from '@react-native-picker/picker';
import * as yup from 'yup';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

const data = [
    {
        label: 'Male'
    },
    {
        label: 'Female'
    }
];

const image = { uri: "https://i.pinimg.com/236x/a0/66/b2/a066b2cf7d122212317517c353f6df87.jpg" }
const signupValidation = yup.object().shape({
    name: yup.string('Please enter name').required('Name is required'),
    email: yup.string().email('Please enter valid email').required('Email Address is required'),
    dob: yup.string('Please enter DOB').required('DOB is requried')
});

const RegistrationPage = () => {
    const [pickerValue, setpickerValue] = useState()
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date("2000-01-01"));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        createTable();
        getData();
    }, []);
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, Dob INTEGER, Gender TEXT, Qualification TEXT);"
            )
        })
    }
    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Email, Dob, Gender, Qualification FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
    const setData = async () => {
        try {
            await db.transaction(async (tx) => {
                await tx.executeSql(
                    "INSERT INTO Users (Name, Email, Dob, Gender, Qualification) VALUES (?,?,?,?,?)",
                    [name, email, date, data, pickerValue]
                );
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', dob: '' }}
            validateOnMount={true}
            onSubmit={values => console.log(values)}
            validationSchema={signupValidation}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                <View style={styles.container}>
                    <View style={styles.cont}>
                        <Text style={styles.font}>sign</Text>
                        <Text style={styles.font2}>Up</Text>
                    </View>
                    <View style={styles.innercont}>
                        <Text style={styles.fontname}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor="#ACACAC"
                            autoCapitalize='none'
                            fontSize={12}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name} />
                        {(errors.name && touched.name) &&
                            <Text style={styles.errortext}>{errors.name}</Text>
                        }
                        <Text style={styles.fontname2}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#ACACAC"
                            fontSize={12}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email} />
                        {(errors.email && touched.email) &&
                            <Text style={styles.errortext}>{errors.email}</Text>
                        }
                        <Text style={styles.fontname3}>Date of Birth</Text>
                        <View style={styles.datestyle}>
                            <DatePicker
                                style={styles.datePickerStyle}
                                date={date} // Initial date from state
                                mode="date" // The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-01-1950"
                                maxDate="01-01-2020"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: -8
                                    },
                                    dateInput: {
                                        marginLeft: 40,
                                    },
                                }}
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                            />
                            {(errors.dob && touched.dob) &&
                                <Text style={styles.errortext}>{errors.dob}</Text>
                            }
                        </View>
                        <Text style={styles.fontname4}>Gender</Text>
                        <RadioButtonRN style={styles.radiobtn}
                            data={data}
                            formHorizontal={true}
                            selectedBtn={(e) => console.log(e)}
                        />
                        <Text style={styles.fontname5}>Qualification</Text>
                        <Picker
                            color="#000"
                            dropdownIconColor='black'
                            style={styles.picker}
                            borderWidth={10}
                            borderColor='black'
                            selectedValue={pickerValue}
                            onValueChange={(itemValue, itemIndex) =>
                                setpickerValue(itemValue)}>
                            <Picker.Item label="Diploma" value="Diploma" />
                            <Picker.Item label="Certificate" value="Certificate" />
                            <Picker.Item label="Bachelors" value="Bachelors" />
                            <Picker.Item label="Masters" value="Masters" />
                        </Picker>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.buttonContainer2}
                            onPressFunction={setData}>
                            <Text style={styles.buttonText2}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.homebtn}>
                        <TouchableOpacity>
                            <Text style={styles.fontbtn}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cont: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginLeft: 100
    },
    font: {
        fontSize: 30,
        color: '#1C5B0B',
    },
    font2: {
        fontSize: 30,
        color: '#1C5B0B',
        fontWeight: 'bold',
    },
    fontname: {
        fontSize: 10,
        color: '#000',
        marginLeft: 4,
        marginBottom: 5
    },
    fontname2: {
        marginLeft: 4,
        fontSize: 10,
        color: '#000',
        marginBottom: 5,
        marginTop: 7
    },
    fontname3: {
        fontSize: 10,
        color: '#000',
        paddingTop: 10,
        paddingBottom: 5
    },
    fontname4: {
        fontSize: 10,
        color: '#000000'
    },
    fontname5: {
        marginTop: 60,
        fontSize: 10,
        color: '#000'
    },
    innercont: {
        paddingTop: 30,
        paddingLeft: 40
    },
    radiobtn: {
        height: 80,
        width: '95%',
        fontSize: 10,
        paddingRight: 50,
        paddingBottom: 5,
        marginBottom: 5,
    },
    picker: {
        fontSize: 10,
        paddingRight: 30
    },
    button: {
        marginBottom: 10,
        paddingLeft: 30,
        borderRadius: 3,
        paddingRight: 80
    },
    input: {
        width: '80%',
        height: '8%',
        backgroundColor: "#FFF",
        borderWidth: 0.1,
        borderRadius: 2,
        paddingLeft: 15
    },
    homebtn: {
        marginTop: -130,
        marginLeft: 50,
    },
    fontbtn: {
        fontSize: 20,
        color: '#1C5B0B'
    },
    errortext: {
        fontSize: 10,
        color: 'red',
    },
    buttonContainer2: {
        marginTop: -20,
        marginLeft: 12,
        width: '105%',
        height: '27%',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 0.5,
        paddingTop: 5

    },
    buttonText2: {
        fontSize: 18,
        color: '#1C5B0B',
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    datestyle: {
        paddingRight: 50,
        paddingBottom: 10,
    },
    picker: {
        height: 50,
        color: 'black',
        width: '90%',
        borderWidth: 5,
        borderColor: 'black',
    },
    datePickerStyle: {
        width: "94%",
        height: "8%"
    },
}
)

export default RegistrationPage;