import React,{Component} from 'react'
import { Text } from 'react-native'

export default class TextComponent extends Component {
    render() {
        return (
            <Text style={this.props.style}>
                {this.props.text}
            </Text>
        )
    }
}