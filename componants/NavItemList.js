import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class NavItemList extends Component {
  render() {

    return (
        <View>
          <View style = {styles.container}>
            <Text style = {styles.textStyle}>HOME</Text>
            <Text style = {styles.textStyle}>ABOUT US</Text>
            <Text style = {styles.textStyle}>SERVICES</Text>
            <Text style = {styles.textStyle}>OUR TEAM</Text>
            <Text style = {styles.textStyle}>OUR PRODUCT</Text>
            <Text style = {styles.textStyle}>CONTACT US</Text>
          </View>
        </View>
    );
  }
}

export default NavItemList;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold'

    },
    textStyle: {
      fontSize: 22,
      paddingTop: 5,
      color: '#fff',
      backgroundColor: '#65c9ef',
      padding: 10,
      margin: 10,
      width: 200,
      textAlign: 'center'
    },
});
