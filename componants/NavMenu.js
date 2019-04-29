import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import DrawerNavigator from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/list.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="DrawerOpen"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/list.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button
          onPress={() => this.props.navigation.Navigate('DrawerOpen')}
          title="DrawerOpen"
        />
      </View>
    );
  }
}
 export default DrawerNavigator ({
   Home: {'screen' : MyHomeScreen},
   Notifications: {'screen' : MyNotificationsScreen},
 }, 
  {'drawerPosition'  : 'right'}
 )


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
// },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// const MyApp = createAppContainer(MyDrawerNavigator);