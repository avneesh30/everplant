import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import { Footer } from '../Footer';

const Cactus = () => {
    return(
        <View style = {styles.container}>
            <View style={{height: '45%'}}>
                <View style = {styles.header}>
                    <Text style={styles.headertext1}>ever</Text>
                    <Text style={styles.headertext2}>Plant</Text>
                </View>
                <View style = {styles.imageview}>
                    <Image
                    style = {styles.image}
                    source = {require('../../src/images/cactus1.jpg')}/>
                </View>
            </View>

            <View style={styles.textfield}>
                <Text style = {styles.textheading}>Cactus Plant</Text>
                <Text style = {styles.tagtext}>#NaturalPlanet</Text>
                <Text style = {styles.detailtext}>Cacti plants play</Text>
                <Text style = {styles.detailtext}>a critical role in</Text>
                <Text style = {styles.detailtext}>our day-to-day lives.</Text>
            </View>
            
            <View>  
                <View style={styles.heading2}>
                    <Text style = {styles.subhead}>Clay</Text>
                    <Text style = {styles.subhead2}>Phone</Text>
                </View>
                <View style = {styles.mockuptext}>
                    <Text style = {styles.text1}>M</Text>
                    <Text style = {styles.text2}>ockup</Text>
                </View> 
            </View>

            <View style={styles.smalltext}>
                <Text style={styles.textS}>We often don't think to buy plant online. But what if</Text>
                <Text style={styles.textS}>we tell you that you can now order the most beautiful</Text>
                <Text style={styles.textS}>plants right from home? Ugaoo presents a broad range </Text>
                <Text style={styles.textS}>of Live Plants. Our online nursery collection</Text>
            </View>

            <Footer />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        height: 110
    },
    headertext1: {
        color: '#000',
        // backgroundColor : "pink",
        fontSize: 50
    },
    headertext2: {
        color: '#000',
        // backgroundColor : "green",
        fontSize: 50,
        fontWeight: "bold"
    },
    imageview: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor : "green",
    },
    image: {
        width: 270, 
        height: 270, 
        borderRadius: 270/2, 
        borderWidth: 8, 
        borderColor: "#d1e5da"
    },
    textfield: {
        // flex: 2,
        // backgroundColor: 'blue',
        // justifyContent: "flex-end"
        alignItems: 'flex-end',
        marginTop: 20
    },
    textheading: {
        color: 'black',
        fontSize: 30,
        marginRight: 35
    },
    tagtext: {
        fontSize: 20,
        color: 'black',
        marginRight: 35,
        marginBottom: 10
    },
    detailtext: {
        color : "black",
        fontSize: 13,
        marginRight: 35
    },
    heading2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: 15,
        height: 70,
        // backgroundColor: 'pink',
        height: 50
    },
    mockuptext:{
        // backgroundColor: 'green',
        marginLeft: 20,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignContent: 'flex-end',
        marginTop: 0
        // height: 60
    },
    text1: {
        color: 'black',
        fontSize: 80,
        textDecorationLine: 'underline',
        fontWeight: "200"
    },
    text2: {
        color: 'black',
        fontSize: 80,
        fontWeight: "200"
    },
    subhead: {
        fontSize: 50,
        color: 'black',
        fontWeight: "400"
    },
    subhead2: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold'
    },
    smalltext:{
        height: 40,
        // backgroundColor: 'pink',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 27
    },
    textS: {
        color: '#000',
        fontSize: 6
    }


})
export default Cactus;