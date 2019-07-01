import React, { Component } from 'react'
import { View, Text, } from 'react-native'

import styles from './screen-style'

class SecondScreen extends Component {
    render() {
        const UserName = this.props.navigation.getParam('userName')
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Hello, {UserName}</Text>
            </View>
        )
    }
}

export default SecondScreen