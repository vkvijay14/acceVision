import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import AboutUs from './AboutUs';
import MainHeading from './MainHeading';
import ServicesInfo from './ServicesInfo';
import TeamMemberGallery from './TeamMemberGallery';


class Main extends Component {
render () {
    const titleHeadOne = 'BLOCKCHAIN';
    const titleDisOne = 'We develop distributed ledger technology, including custom cryptocurrencies, individual nodes, hash algorithms, and architectures for public and private blockchains. We engineer Proof of Work, Proof of Stake, and Proof of Concept';
    const titleHeadTwo = 'IT SERVICE MANAGEMENT';
    const titleDisTwo = 'We provides ITSM (IT Service Management) software solutions, including features with user-defined dashboard customization capabilities for efficient tracking and management.'
    const titleHeadThree = 'UI/UX DEVELOPMENT';
    const titleDisThree = 'Wovide sere prvice of Ui/Ux for web development, graphic and logo designing, e-commerce and mobile apps.';
    return (
        <View style = {styles.container}>
            <View>
                <MainHeading titleText={'About Us'} shortdis={'Few Words Of Our Company'}/>
            </View>
            

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.contentContainer}>
                <View>
                    <AboutUs titleText={titleHeadOne} titleDisTxt={titleDisOne}/>
                </View>
                <View>
                    <AboutUs titleText={titleHeadTwo} titleDisTxt={titleDisTwo}/>
                </View>
                <View>
                    <AboutUs titleText={titleHeadThree} titleDisTxt={titleDisThree}/>
                </View>
            </ScrollView>

            <View>
                <ServicesInfo/>
            </View>
            <View>
                <MainHeading titleText={'Our Services'} shortdis={'Check our Services'}/>
                <View >
                <Image style = {styles.serviceInfoCont} source={require('./images/serviceinfo.png')}/>
                </View>
            </View>
            <View>
                <MainHeading titleText={'Our Team Members'}/>
            </View>
            <View>
                <TeamMemberGallery/>
            </View>

        </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    container: {
    // flex: 1,
    flexDirection: 'column',
    //justifyContent: 'flex-start',
    backgroundColor: '#fff'
    },
    serviceInfoCont: {
        width: 400,
        marginLeft: 10,
    }
});