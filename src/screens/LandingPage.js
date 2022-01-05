import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Footer } from '../Footer';
import { dbService } from '../service/DB_SERVICE';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const image = { uri: "https://i.pinimg.com/236x/a0/66/b2/a066b2cf7d122212317517c353f6df87.jpg" }

const LandingPage = (props) => {
  // useEffect (() => {
  //   dbService.init()
  // },[])
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column'
    }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../images/landing.jpg')} style={{ flex: 1, flexDirection:'column', paddingHorizontal:20 }}>
          <View style={{flex:.6, flexDirection: 'row', justifyContent: 'center',paddingVertical:45 }}>
            <Text style={styles.text1}>Ever</Text>
            <Text style={styles.text2}>PLANT</Text>
          </View>
          <View style={{flex:.9, flexDirection: 'column', alignItems: 'center', paddingVertical:60 }}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate("signup")}>
              <Text style={styles.buttonText1}>
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: "#F5FFFA" }]} onPress={() => props.navigation.navigate("login")}>
              <Text style={styles.buttonText2}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,paddingBottom:10}}>
            <Text style={styles.text3}>Welcome Ever</Text>
            <Text style={styles.text4}>Plant Today</Text>
          </View>
          <View style={{flex:.61, justifyContent:'flex-end', alignItems:'center', paddingBottom:25}}>
            <Text style={{color :'#fff', textAlign:'center', fontSize:5, paddingHorizontal:55, }}>We often don't think to buy plant online. But what if we tell you that you can now order the most beautiful plants right from home? Ugaoo presents a broad range of Live Plants that can be bought online in India. Our online nursery collection includes Annual Flowers, Aromatic and Aquatic Plants, Cactii, Bonsai, Ferns, Indoor and Outdoor Plants etc.</Text>
           </View>
        </ImageBackground>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
 
  buttonContainer: {
    width: 220,
    marginBottom: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(175, 238, 238, 0.4)'
  },
  buttonText1: {
    fontSize: 13,
    color: "#fff",
    alignSelf: "center",
  },
  buttonText2: {
    fontSize: 13,
    color: "#000",
    alignSelf: "center",
  },
  text1: {
    color: '#fff',
    fontSize: 25,
  },
  text2: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold"
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
});

export default LandingPage;

