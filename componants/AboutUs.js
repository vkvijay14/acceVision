import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';


class AboutUs extends Component {
  render() {
    return (
          <View style = {styles.articlal}>
            <Text style = {styles.headingTitle}>{this.props.titleText}</Text>
            <Text style = {styles.headingDis}>{this.props.titleDisTxt}</Text>
          </View>
    )
  }
}

export default AboutUs;

const styles = StyleSheet.create({
  articlal: {
    width: 400,
    height: 200,
    borderTopWidth: 1,
    borderColor: '#fd5b63',
    padding: 10,
    marginRight: 10,
    marginLeft:10,
    textAlign: 'right',
    backgroundColor: '#F4FBFC'
  },
  headingTitle: {
    fontSize: 22,
    color: '#fd5b63',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  headingDis: {
    fontSize: 18,
    color: '#555',
    textAlign: 'justify'
  },
});