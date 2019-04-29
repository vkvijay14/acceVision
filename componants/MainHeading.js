import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

// const aboutus = 'About Us';
// const shortdis = 'Few Words Of Our Company';


class MainHeading extends Component {
  render() {
    return (
      <View style = {styles.aboutUsCon} >
        <View style = {styles.discBarCon}>
          <View style={styles.discriptionBar}/>
          <View style={styles.discriptionBartext}>
            <Text style = {styles.txtTop}>{this.props.titleText}</Text>
            <Text style = {styles.txtBottum}>{this.props.shortdis}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default MainHeading;

const styles = StyleSheet.create({
    aboutUsCon: {
      flexDirection: 'column',
    },
    discBarCon: {
      flexDirection: 'row',
      padding: 20,
    },
    discriptionBar: {
      width: 5,
      height: 70,
      backgroundColor: '#17a2b8',
      // marginLeft: 20,
    },
    discriptionBartext: {
      marginLeft: 10,
    },
    txtTop: {
      fontSize: 35,
      color: '#000',
      fontWeight: 'bold'
    },
    txtBottum: {
      fontSize: 18,
      color: '#a6a6a6',
    },
});