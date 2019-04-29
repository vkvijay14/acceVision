import React, { Component } from 'react';
import { Container, Navbar } from 'navbar-native';

class NavigationBar extends Component {
    render() {
        return (
            <Container>
                <Navbar
                    title={"Navbar Native"}
                    left={{
                        icon: "ios-arrow-back",
                        label: "Back",
                        onPress: () => {alert('Go back!')}
                    }}
                    right={[{
                        icon: "ios-search",
                        onPress: () => {alert('Search!')}
                    },{
                        icon: "ios-menu",
                        onPress: () => {alert('Toggle menu!')}
                    }]}
                />
            </Container>
        )
    }
}

export default NavigationBar;