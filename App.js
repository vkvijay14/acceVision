import React from 'react';
import {Component} from 'react'
import { View, Text, Button,ImageBackground,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppComponents from './componants/AppComponents';
import NavItemList from './componants/NavItemList';
import { ScrollView } from 'react-native-gesture-handler';
import MainTop from './componants/MainTop';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <ScrollView>
      <View style = {styles.headcontainer}>
      <ImageBackground style={styles.backcover} source={require('./componants/images/banner1.jpg')}>
      <View>
      <View style = {styles.container}>
              <View style = {styles.navIcon}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { name: 'Brent' })}>
                <Image source={require('./componants/images/list.png')}/>
              </TouchableOpacity>
              </View>
              <View style = {styles.logoContainer}>
                <Image style = {styles.logoCont} source={require('./componants/images/logo.png')}/>
              </View>
              
            </View>

          <View>
            <MainTop />
          </View>
      </View>

      </ImageBackground>
      </View>
      <AppComponents />
     
      </ScrollView>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = {
    // title: 'Menu',
    // headerRight: <View/>
    header: null
  }
  render() {
    return (
      <View style = {styles.navMenu}>
        <NavItemList />
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Home')}>
          <Text style = {styles.textStyle}>BACK TO MAIN PAGE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: '#1e90ff'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1
      }
    }

  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

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

    headcontainer: {
      flex: 1,
     },
     backcover: {
       width: '100%', 
       height: '100%',
     },
     logo: {
       width: 150,
       height: 100,
     },
     navMenu : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c9e5f3'

     },
     textStyle: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
      marginTop: 100,
      backgroundColor: '#50a9cc',
      padding: 10
    },
  });