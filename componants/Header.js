import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
// import NavMenu from './NavMenu';

class Header extends Component {
    render () {
        
        return (
            <View style = {styles.container}>
              <View style = {styles.navIcon}>
                <Image source={require('./images/list.png')}/>
              </View>
              <View style = {styles.logoContainer}>
                <Image style = {styles.logoCont} source={require('./images/logo.png')}/>
              </View>
              
            </View>
            
        )
    }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#a7a7a780'
    // backgroundColor: '#cfcfcf',
    // opacity: .2,
    marginTop: 10,
  },
  logoContainer: {
      width: '30%', 
      height: 80, 
    },
    navIcon: {
      paddingLeft: 30,
      marginTop: 20,
    },
  });