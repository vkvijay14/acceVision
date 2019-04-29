import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Image} from 'react-native';

class ServicesInfo extends Component {
  render() {
    return (
        <View style = {styles.infoCon}>
            <View style = {styles.info}>
                <View style = {styles.mob}>
                    <Image source={require('./images/infoicon.png')}/>
                </View>
                <Text style = {styles.infoTitle}>Mobile Applications</Text>
            </View>
            <View style = {styles.infoTitleCon}>
                <Text style = {styles.infoTitleDis}>Our mobile app developers specialize in the technologies that enable mobile app services to power Blackberry mobile apps such as ActionScript, HTML, CSS, JavaScript, C, and C++ We develop and provide Android mobile app solutions</Text>
            </View>
            <View style = {styles.info}>
                <View style = {styles.mob}>
                    <Image source={require('./images/headphnicon.png')}/>
                </View>
                <Text style = {styles.infoTitle}>CMS Development</Text>
            </View>
            <View style = {styles.infoTitleCon}>
                <Text style = {styles.infoTitleDis}>Our Content Management System (CMS) development services include custom, end-to-end programming of CMS server architectures and interface designs, as well as first-class integration and implementation solutions</Text>
            </View>
        </View>  
        )
        }
    }
export default ServicesInfo;

const styles = StyleSheet.create({
    infoCon: {
        padding: 20,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    infoTitle: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    infoTitleDis: {
        fontSize: 18,
        color: '#555',
        textAlign: 'justify'
    },
    infoTitleCon: {
        flexDirection: 'column',
        margin: 10,
    },
    mob: {
        width: 40,
        height: 40,
    }
});