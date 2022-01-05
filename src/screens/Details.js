import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Footer } from '../Footer';
import Plants from "../service/Plants.json"
import Icons from "../screens/Icons"

const Details = (props) => {
    const data = props.route.params.briefJson
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <View style={{ flex: 2 }}>
                <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headertext1}>ever</Text>
                    <Text style={styles.headertext2}>Plant</Text>
                </View>
            </View>
            <View style={{ flex: 1.8, justifyContent: "center", alignItems: 'center', paddingVertical: 20  }}>
                <Image
                    style={styles.image}
                    source={Icons[data.picture]} />
            </View>

            <View style={{alignItems: 'flex-end', paddingVertical: 45, marginRight: 25}}>
                <Text style={styles.textheading}>{data.title}</Text>
                <Text style={styles.tagtext}>#NaturalPlanet</Text>
                <Text style={styles.detailtext}>{data.line1}</Text>
                <Text style={styles.detailtext}>{data.line2}</Text>
                <Text style={styles.detailtext}>{data.line3}</Text>
            </View>

                <View style={{flex: 2.4}}>
                    <View style={{ flex: .4, flexDirection: 'row', alignItems: 'flex-start', marginLeft: 15}}>
                    <Text style={styles.subhead}>Clay</Text>
                    <Text style={styles.subhead2}>Phone</Text>
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'flex-start', marginLeft: 15}}>
                    <Text style={styles.text1}>M</Text>
                    <Text style={styles.text2}>ockup</Text>
                </View>
                </View>
            <View style={{alignItems: 'center', marginTop: 25}}>
                <Text style={styles.textS}>We often don't think to buy plant online. But what if</Text>
                <Text style={styles.textS}>we tell you that you can now order the most beautiful</Text>
                <Text style={styles.textS}>plants right from home? Ugaoo presents a broad range </Text>
                <Text style={styles.textS}>of Live Plants. Our online nursery collection</Text>
            </View>

            <Footer />

        </View >
    );
};

const styles = StyleSheet.create({

    headertext1: {
        color: '#000',
        fontSize: 30,
    },
    headertext2: {
        color: '#000',
        fontSize: 30,
        fontWeight: "bold"
    },
    image: {
        width: 190,
        height: 190,
        borderRadius: 270 / 2,
        borderWidth: 8,
        borderColor: "#d1e5da"
    },
    textheading: {
        color: 'black',
        fontSize: 20,
    },
    tagtext: {
        fontSize: 12,
        color: 'black',
        paddingVertical: 5
    },
    detailtext: {
        color: "black",
        fontSize: 8,
    },
    text1: {
        color: 'black',
        fontSize: 40,
        textDecorationLine: 'underline',
        fontWeight: "200"
    },
    text2: {
        color: 'black',
        fontSize: 40,
        fontWeight: "200"
    },
    subhead: {
        fontSize: 25,
        color: 'black',
        fontWeight: "400"
    },
    subhead2: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    textS: {
        color: '#000',
        fontSize: 5
    }


})
export default Details;