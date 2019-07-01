import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import styles from './screen2-style'
class SecondScreen extends Component {
    render() {
        const UserName = this.props.navigation.getParam('userName')
        return (
            <View style = {styles.container}>
                <Text>{UserName}</Text>
            </View>
        )
    }
}

export default SecondScreen