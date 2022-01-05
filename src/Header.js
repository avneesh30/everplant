import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column'
        }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.headertext}>Welcome to the Dashboard</Text>
                <Text style={styles.headertext1}>Please choose one from the following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headertext: {
        color: '#1C5B0B',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    headertext1: {
        color: '#1C5B0B',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 15,
        marginVertical: 5,
        fontWeight: 'bold'
    }
})
export default Header;