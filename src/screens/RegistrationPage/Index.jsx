import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {Picker} from '@react-native-picker/picker';
import * as yup from 'yup';
import { Formik } from 'formik';

const data = [
  {
    label: 'Male'
   },
   {
    label: 'Female'
   }
  ];
const signupValidation = yup.object().shape({
  name: yup.string('Please enter name').required('Name is required'),
  email: yup.string().email('Please enter valid email').required('Email Address is required'),
  dob: yup.string('Please enter DOB').required('DOB is requried')
});

export default function registration() {
  const [ pickerValue, setpickerValue] = useState()

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
        <Text style={styles.fontname}>Email</Text> 
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
        <Text style={styles.fontname}>Date of Birth (in DD-MM-YY format)</Text> 
        <TextInput 
          style={styles.input}
          placeholder="Enter your date of birth"
          placeholderTextColor = "#ACACAC"
          autoCapitalize='none'
          color="#000000"
          keyboardType='numeric'
          onChangeText={handleChange('dob')}
          onBlur={handleBlur('dob')}
          value={values.dob}/>
        { (errors.dob && touched.dob) && 
          <Text style={styles.errortext}>{errors.dob}</Text>
        }
        <Text style={styles.fontname}>Gender</Text> 
        <RadioButtonRN style = {styles.radiobtn}
        data={data}
        selectedBtn={(e) => console.log(e)}/>
        <Text style={styles.fontname}>Qualification</Text> 
        <Picker
        color="#000000"
        style={{ height: 50, color: 'black', width: '90%', backgroundColor: '#F9F9F9', borderWidth: 10, borderColor: 'black' }}
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
      <Button 
          title='Submit'
          color="#E1E2E4"
          paddingRight={30}
          />
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
  cont:{fontSize:10,backgroundColor:'#FFFFFF',color: '#ACACAC', flexDirection:'row'},
  font:{fontSize:40,color: '#1C5B0B', paddingLeft: 150},
  font2:{fontSize:40,color: '#1C5B0B', fontWeight:'bold', alignContent:'flex-start'},
  fontname: {fontSize:20,color:'#000000', paddingBottom:5},
  innercont: {paddingTop:30, paddingLeft:40},
  radiobtn: {paddingRight:50, paddingBottom:10 },
  picker: {paddingRight: 30},
  button: {paddingTop:40, paddingLeft: 80, borderRadius: 3, paddingRight:80 },
  input:{
    width: '85%',
    backgroundColor: "#FFFFFF",
    padding: 15,
    // marginBottom: 5,
    borderWidth: 0.1,
    borderRadius: 2, 
  },
  homebtn: {
    paddingTop: 30,
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
  }
}
)