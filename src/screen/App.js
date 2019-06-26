import React, { Component } from 'react'
import { TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { user } from '../store/action'
import TextComponent from '../components/TextComponent'
import styles from './app-style'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toList : ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Enter Name' onChangeText={(text) => this.setState({toList:text})}/>
        <TextComponent style={styles.txt} text={this.props.user} />
        <Button title={'click'} onPress={()=>this.props.navigation.navigate('Screen1')}/>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  user : state.user
})
const mapDispatchToProps = ({
  Add : user.intName
})

const AppWrapper = connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppWrapper