import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {Picker} from '@react-native-picker/picker';
import * as yup from 'yup';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';
// import RadioGroup from 'react-native-radio-buttons-group';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
      name: 'MainDB',
      location: 'default',
  },
  () => { },
  error => { console.log(error) }
);

// const radioButtonsData = [
//   {
//     id: '1',
//     label: 'Male',
//     value: 'option1',
//     color: 'red',
//     selected: true,
//     placeholderTextColor: "black"
//   },
// 527302010013887
// IFSC : UBIN0552739  
//   {
//     id: '2',
//     label: 'Female',
//     value: 'option2',
//     color: 'red',
//     selected: false,
//   },
// ];
const data = [
  {
    label: 'Male'
   },
   {
    label: 'Female'
   }
  ];

// const radio_props = [
//   {label: 'Male', value: 0 },
//   {label: 'Female', value: 1 }
// ];
// var RadioButtonProject = React.createClass({
//   getInitialState: function() {
//     return {
//       value: 0,
//     }
//   },


const image = { uri: "https://i.pinimg.com/236x/a0/66/b2/a066b2cf7d122212317517c353f6df87.jpg" }
const signupValidation = yup.object().shape({
  name: yup.string('Please enter name').required('Name is required'),
  email: yup.string().email('Please enter valid email').required('Email Address is required'),
  dob: yup.string('Please enter DOB').required('DOB is requried')
});

export default function registration() {
  const [ pickerValue, setpickerValue] = useState()
  // const [date, setDate] = useState(new Date("2000-01-01"))
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date("2000-01-01"));
  // const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  // const onPressRadioButton = radioButtonsArray => {
  //   console.log(radioButtonsArray);
  //   setRadioButtons(radioButtonsArray);
  // };
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
// const getData = () => {
//   try {
//       db.transaction((tx) => {
//           tx.executeSql(
//               "SELECT Name, Email, Dob, Gender, Qualification FROM Users",
//               [],
//               (tx, results) => {
//                   var len = results.rows.length;
//               }
//           )
//       })
//   } catch (error) {
//       console.log(error);
//   }
// }
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


return(
  <Formik
    initialValues={{ name: '', email: '', dob: '' }}
    validateOnMount={true}
    onSubmit={values => console.log(values)}
    validationSchema={signupValidation}
    >
    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
    <View style= {styles.container}>
      <View style ={styles.cont}>
        <Text style={styles.font}>sign</Text>
        <Text style={styles.font2}>Up</Text>
      </View>
      <View style={styles.innercont}>
        <Text style={styles.fontname}>Name</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor = "#ACACAC"
          color="#000000"
          autoCapitalize='none'
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}/>
        { (errors.name && touched.name) && 
          <Text style={styles.errortext}>{errors.name}</Text>
        }
        <Text style={styles.fontname2}>Email</Text> 
        <TextInput 
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor = "#ACACAC"
          color="#000000"
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}/>
        { (errors.email && touched.email) && 
          <Text style={styles.errortext}>{errors.email}</Text>
        }
        <Text style={styles.fontname3}>Date of Birth</Text> 
        <View style = {styles.datestyle}>
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
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        { (errors.dob && touched.dob) && 
          <Text style={styles.errortext}>{errors.dob}</Text>
        }
        </View>
        <Text style={styles.fontname4}>Gender</Text> 
        <RadioButtonRN style = {styles.radiobtn}
        data={data}
        formHorizontal={true}
        selectedBtn={(e) => console.log(e)}
        />
        <Text style={styles.fontname}>Qualification</Text> 
        <Picker
        color="#000000"
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
      <View style = {styles.button}>
      <TouchableOpacity style={styles.buttonContainer2}
      onPressFunction={setData}>
        <Text style={styles.buttonText2}>
            Submit
          </Text>
        </TouchableOpacity>
        </View>
      <View style={styles.homebtn}>
        <TouchableOpacity>
          <Text style={styles.fontbtn}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
  </Formik>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFFFF',
    color: '#ACACAC',
    paddingTop: 40,
  },
  cont:{
    fontSize:10,
    backgroundColor:'#FFFFFF',
    color: '#ACACAC',
    flexDirection:'row'
  },
  font:{
    fontSize:40,
    color: '#1C5B0B',
    paddingLeft: 150,
    fontFamily:'Montserrat'
  },
  font2:{
    fontSize:40,
    color: '#1C5B0B',
    fontWeight:'bold',
    alignContent:'flex-start',
    fontFamily:'Montserrat'
  },
  fontname: {
    fontSize:20,
    color:'#000000',
    paddingBottom:7
  },
  fontname2: {
    fontSize:20,
    color:'#000000',
    paddingTop:10,
    paddingBottom:5
  },
  fontname3: {
    fontSize:20,
    color:'#000000',
    paddingTop:10,
    paddingBottom:5
  },
  fontname4: {
    fontSize:20,
    color:'#000000'
  },
  innercont: {
    paddingTop:30,
    paddingLeft:40
  },
  radiobtn: {
    paddingRight:50,
    paddingBottom:5,
    marginBottom: 5,
  },
  picker: {
    paddingRight: 30
  },
  button: {
    paddingTop:10,
    paddingLeft: 30,
    borderRadius: 3,
    paddingRight:80
  },
  input:{
    width: '87%',
    backgroundColor: "#FFFFFF",
    borderWidth: 0.1,
    borderRadius: 2,
    padding: 15
  },
  homebtn: {
    paddingTop: 20,
    paddingLeft: 160
  },
  fontbtn:{
    fontSize:20,
    color: '#1C5B0B'
  },
  errortext: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold'
  },
  buttonContainer2: {
    elevation: 1,
    marginLeft: 60,
    marginTop: 50,
    width: 250,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 70,
    paddingTop: 10,
    paddingRight: 70,
  },
  buttonText2: {
    fontSize: 25,
    color: '#1C5B0B',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  datestyle: {
    paddingRight: 50,
    paddingBottom:10
  },
  picker:{
    height: 50,
    color: 'black', 
    width: '90%', 
    // backgroundColor: '#F9F9F9',
    borderWidth: 5, 
    borderColor: 'black',
    elevation: 5
  },
  datePickerStyle: {
    width: "100%",
    // marginTop: 20,
  },
}
)