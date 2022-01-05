import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Footer } from '../Footer';
import Header from '../Header';
import Plants from "../service/Plants.json"
import Icons from "./Icons"

const Dashboard = (props) => {
    const { width } = Dimensions.get('screen')
    console.log((width - 15) / 2)
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white'
        }}>
            <ScrollView style={{ flex: 1 }}>
                <Header />
                <View style={{ backgroundColor: 'white', flexDirection: 'row', flexWrap: 'wrap', display: 'flex' }}>
                    {Plants.map(post => {
                        const { id, image, text1, text2 } = post;

                        return <View style={{ backgroundColor: '#e8e8e8', alignItems: 'center', alignContent: 'center', height: 200, margin: 4, width: (width - 16) / 2 }} id={id}>
                            <Image source={Icons[image]} style={{ width: 70, height: 70 }} />
                            <TouchableOpacity onPress={() => props.navigation.navigate("details", {briefJson: post})}>
                                <Text style={styles.GridViewTextLayout}>{text1}</Text>
                                <Text style={styles.GridViewTextLayout}>{text2}</Text>
                            </TouchableOpacity>
                        </View>
                    })}
                </View>
            </ScrollView>
            <Footer />
        </View>
    )
}
const styles = StyleSheet.create({
    GridViewTextLayout: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#1C5B0B',
        marginVertical: 10
    }
})

export default Dashboard;