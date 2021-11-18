import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


const LandingPage = (props) => {
        return (
          <View style = { styles.container } >
      
            <View style= { styles.logoContainer }>
              <Text style = { styles.logoText }>
                Newzzz
              </Text>
              <Text style = { styles.logoDescription }>
                Get your doze of daily news!
              </Text>
      
            </View>
          </View>
        );
      }
      
      
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "orange"
          },
          logoContainer:{
              alignItems: "center",
          },
          logoText: {
              fontSize: 24,
              fontWeight: '600',
              color: 'white'
          },
          logoDescription:{
              fontSize: 15,
              fontWeight: '600',
              color: 'white'
          }
      });

      export default LandingPage;