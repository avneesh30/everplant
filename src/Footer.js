import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Footer = () => {
    return (
        <View style={{ backgroundColor: '#F5FFFA', height: 70, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <FontAwesome5 style={{ paddingHorizontal: 15 }} name={'youtube'} size={20} />
                <FontAwesome5 style={{ paddingHorizontal: 15 }} name={'twitter'} size={20} />
                <FontAwesome5 style={{ paddingHorizontal: 15 }} name={'instagram'} size={20} />
                <FontAwesome5 style={{ paddingHorizontal: 15 }} name={'facebook'} size={20} />
            </View>
            <Text style={{ fontSize: 9 }}> www.yourweb.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#F5FFFA',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 120
    },
    footColor: {
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15
    },

    footerText: {
        fontSize: 8,
        color: 'black',
        marginTop: 4,
        textAlign: 'center'
    },

    footicon: {
        width: 50,
        color: 'black',
    }

})
