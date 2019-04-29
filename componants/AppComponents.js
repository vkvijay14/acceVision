import React, {Component} from 'react';
import {StyleSheet, Text, View,ImageBackground,ScrollView} from 'react-native';
// import Header from './Header';
import Main from './Main';
// import MainTop from './MainTop';

export default class AppComponents extends Component {
  render() {

    return (
      <ScrollView>
        <View>
          
          <View>
            <Main/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//   },
//   backcover: {
//     width: '100%', 
//     height: '100%',
//   },
//   logo: {
//     width: 150,
//     height: 100,
//   },
// });
