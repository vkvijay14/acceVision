import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CommonButton from './CommonButton';



class MainTop extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.headingCon}>
                    <Text style = {styles.headingOne}>Mobile <Text style = {styles.headingTwo}>Applications..</Text></Text>
                    <Text style = {styles.headingPara}>Our mobile app developers specialize in the technologies that enable mobile app services to power Blackberry mobile apps such as ActionScript, HTML, CSS, JavaScript, C, and C++ We develop and provide Android mobile app solutions</Text>
                    <CommonButton />
                </View>
            </View>
        )
    }
}

export default MainTop;

const styles = StyleSheet.create({



    container: {
        // flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: '#8180807a'

        
    },
    headingOne: {
        // paddingTop: 20,
        fontSize: 35,
        color: '#fff',
        paddingLeft: 20,

    },
    
    headingTwo: {
        color: '#fd5b63',
        marginLeft: 10,
    },
    headingPara: {
        color: '#fff',
        padding: 20,
        
        fontSize: 18,
        textAlign: 'justify',
    },
    
  
 
    
});