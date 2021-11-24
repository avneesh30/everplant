import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.footColor}>
                <FontAwesome5 style={styles.footicon} name={'youtube'} size={20} />
                <FontAwesome5 style={styles.footicon} name={'twitter'} size={20} />
                <FontAwesome5 style={styles.footicon} name={'instagram'} size={20} />
                <FontAwesome5 style={styles.footicon} name={'facebook'} size={20} />
            </View>
            <Text style={styles.footerText}>
                www.yourweb.com
            </Text>
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
        height: 80
    },
    footColor: {
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20
    },

    footerText: {
        paddingLeft: 125,
        paddingTop: 5,
        fontSize: 8,
        color: 'black',
    },

    footicon: {
        width: 50,
        color: 'black',
    }

})
