import React,{Component} from 'react'
import {Text} from 'react-native'

export default class TextComponent extends Component{
    render(){
        return(
            <Text>
                {this.props.text}
            </Text>
        )
    }
}