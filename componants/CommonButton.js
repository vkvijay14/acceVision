import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


class CommonButton extends Component {
  render() {
    return (
        <View > 
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.button2}>Read More</Text>
            </TouchableOpacity>
        </View>

    )
  }
}

export default CommonButton;

const styles = StyleSheet.create ({
    button: {
        marginLeft: 20,
        width: 150,
        // height: 50,
        backgroundColor: '#17a2b8',
        fontSize: 22,
        marginBottom: 20,
        borderRadius: 20,
    },
    button2: {
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
    },
})