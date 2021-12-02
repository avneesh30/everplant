import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Footer } from '../Footer';

const image = { uri: "https://i.pinimg.com/236x/a0/66/b2/a066b2cf7d122212317517c353f6df87.jpg" }
 
const LandingPage = (props) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.heading}>
          <Text style={styles.text1}>Ever</Text>
          <Text style={styles.text2}>PLANT</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() => props.navigation.navigate("signup")}>
          <Text style={styles.buttonText1}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={() => props.navigation.navigate("login")}>
          <Text style={styles.buttonText2}>
            Log in
          </Text>
        </TouchableOpacity>
        <View style={styles.subHeading}>
          <Text style={styles.text3}>
            Welcome Ever
          </Text>
          <Text style={styles.text4}>
            Plant Today
          </Text>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.text5}>We often don't think to buy plant online. But what if we tell you that you can now order the most beautiful</Text>
          <Text style={styles.text6}>plants right from home? Ugaoo presents a broad range of Live Plants that can be bought online</Text>
          <Text style={styles.text6}>in India. Our online nursery collection includes Annual Flowers, Aromatic and Aquatic Plants,</Text>
          <Text style={styles.text7}>Cactii, Bonsai, Ferns, Indoor and Outdoor Plants etc.</Text>
        </View>
    </ImageBackground>
    <Footer />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: '#ACACAC',
    flexDirection: 'row',
    marginBottom:110,
    marginTop:0,
  },
  buttonContainer1: {
    marginLeft: 75,
    width: 220,
    height: 50,
    marginTop: -15,
    marginBottom:80,
    backgroundColor: 'rgba(175, 238, 238, 0.4)',
    paddingLeft: 70,
    paddingTop:13,
    paddingRight: 90,
  },
  buttonText1: {
    fontSize: 13,
    color: "#fff",
    alignSelf: "center",
  },
  buttonContainer2: {
    marginLeft: 75,
    marginBottom:90,
    marginTop: -25,
    width: 220,
    height: 50,
    backgroundColor: "#F5FFFA",
    paddingLeft: 70,
    paddingRight: 90,
    paddingTop: 13
  },
  buttonText2: {
    fontSize: 13,
    color: "#000",
    alignSelf: "center",
  },
  text1: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 100,
    paddingTop: 13,
    fontFamily: 'Poppins-SemiBold'
  },
  text2: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignContent: 'flex-start',
    fontFamily: 'Montserrat-BoldItalic',
    margin: 0
  },
  subHeading:{
    marginTop:-60,
    marginBottom: 130
  },
  text3: {
    fontSize: 20,
    color: '#F5F5DC',
    fontWeight: 'bold',
    paddingLeft: 40,
    fontFamily: "Poppins-SemiBoldItalic"
  },
  text4: {
    fontSize: 30,
    color: '#F5F5DC',
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  bottomText:{
    marginTop: -80,
    marginBottom: 100
  },
  text5: {
    marginTop: 30,
    color: '#fff',
    fontSize: 4,
    marginLeft: 60
  },
  text6: {
    fontSize: 4,
    color: '#fff',
    marginLeft: 70
  },
  text7:{
    fontSize: 4,
    color: '#fff',
    marginLeft: 120
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default LandingPage;

