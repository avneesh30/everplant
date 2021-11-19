import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const image = { uri: "https://i.pinimg.com/236x/a0/66/b2/a066b2cf7d122212317517c353f6df87.jpg" }

const LandingPage = (props) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.text1}>Ever</Text>
          <Text style={styles.text2}>PLANT</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer1}>
          <Text style={styles.buttonText1}>
            Sign UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2}>
          <Text style={styles.buttonText2}>
            Log in
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text3}>
            Welcome Ever
          </Text>
          <Text style={styles.text4}>
            Plant Today
          </Text>
        </View>
        <View>
          <Text style={styles.text5}>We often don't think to buy plant online. But what if we tell you that you can now order the most beautiful</Text>
          <Text style={styles.text6}>plants right from home? Ugaoo presents a broad range of Live Plants that can be bought online in India.</Text>
          <Text style={styles.text6}>Our online nursery collection includes Annual Flowers, Aromatic and Aquatic Plants, Cactii,</Text>
          <Text style={styles.text6}>Bonsai, Ferns, Indoor and Outdoor Plants etc.</Text>
        </View>
      </View>
    </ImageBackground>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  heading: {
    color: '#ACACAC',
    flexDirection: 'row'
  },
  buttonContainer1: {
    elevation: 5,
    marginLeft: 60,
    marginTop: 40,
    width: 250,
    height: 50,
    backgroundColor: "#b0cdc2",
    borderRadius: 10,
    paddingLeft: 70,
    paddingTop: 13,
    paddingRight: 90,
  },
  buttonText1: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  buttonContainer2: {
    elevation: 5,
    marginLeft: 60,
    marginTop: 40,
    width: 250,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingLeft: 70,
    paddingTop: 13,
    paddingRight: 90,
  },
  buttonText2: {
    fontSize: 13,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  text1: {
    fontSize: 20,
    color: '#F5F5DC',
    paddingLeft: 100,
    fontWeight: 'bold',
    paddingTop: 11,
  },
  text2: {
    fontSize: 30,
    color: '#F5F5DC',
    fontWeight: 'bold',
    alignContent: 'flex-start'
  },
  text3: {
    fontSize: 20,
    color: '#F5F5DC',
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingTop: 60,
  },
  text4: {
    fontSize: 30,
    color: '#F5F5DC',
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingTop: 0,
    fontFamily: 'AbrilFatface-Regular',
  },
  text5: {
    marginTop: 110,
    color: '#fff',
    fontSize: 4,
    marginLeft: 60
  },
  text6: {
    fontSize: 4,
    color: '#fff',
    marginLeft: 60
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default LandingPage;

