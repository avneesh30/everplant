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

const data = [
  {
    label: 'Male'
   },
   {
    label: 'Female'
   }
  ];
// const [ pickerValue, setpickerValue] = useState()

export default function SignUp() {
  const [ pickerValue, setpickerValue] = useState()

return(
  <View style= {styles.container}>
    <View style ={styles.cont}>
      <Text style={styles.font}>sign</Text>
      <Text style={styles.font2}>UP</Text>
    </View>
    <View style={styles.innercont}>
      <Text style={styles.fontname}>Name</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor = "#ACACAC"
        color="#000000"
        autoCapitalize='none'/>
      <Text style={styles.fontname}>Email</Text> 
      <TextInput 
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor = "#ACACAC"
        color="#000000"
        autoCapitalize='none'
        keyboardType='email-address'/>
        <Text style={styles.fontname}>Date of Birth (in DD-MM-YY format)</Text> 
      <TextInput 
        style={styles.input}
        placeholder="Enter your date of birth"
        placeholderTextColor = "#ACACAC"
        autoCapitalize='none'
        color="#000000"
        keyboardType='numeric'/>
      <Text style={styles.fontname}>Gender</Text> 
      <RadioButtonRN style = {styles.radiobtn}
      data={data}
      selectedBtn={(e) => console.log(e)}/>
      <Text style={styles.fontname}>Qualification</Text> 

      <Picker
      color="#000000"
      style={{ height: 50, backgroundColor: '#F0F0F0', width: '90%' }}
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
       color="#C7DBED"
       paddingRight={30}
       />
    </View>
    <View style={styles.homebtn}>
      <TouchableOpacity>
        <Text style={styles.fontbtn}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent: 'center',
    // alignContent: 'center',
    backgroundColor: '#FFFFFF',
    color: '#ACACAC',
    // paddingLeft: 150,
    paddingTop: 40,
    },
  cont:{fontSize:10,backgroundColor:'#FFFFFF',color: '#ACACAC', flexDirection:'row'},
  font:{fontSize:40,color: '#1C5B0B', paddingLeft: 150},
  font2:{fontSize:40,color: '#1C5B0B', fontWeight:'bold', alignContent:'flex-start'},
  fontname: {fontSize:20,color:'#000000', paddingBottom:5},
  innercont: {paddingTop:30, paddingLeft:40},
  radiobtn: {paddingRight:50, paddingBottom:10 },
  picker: {paddingRight: 30},
  button: {paddingTop:50, paddingLeft: 80, borderRadius: 3, paddingRight:80 },
  input:{
    width: '85%',
    // marginLeft: 20,
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 15,
    borderWidth: 0.1,
    borderRadius: 5, 
  },
  homebtn: {
    paddingTop: 30,
    paddingLeft: 150
  },
  fontbtn:{
    fontSize:20,
    color: '#1C5B0B'
  }
}
)