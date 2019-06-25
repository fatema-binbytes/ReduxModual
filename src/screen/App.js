
import React, {Component} from 'react';
import { TextInput, View} from 'react-native';

import {connect } from 'react-redux'

import {action} from '../store/action'
import TextComponent from '../components/text'
import styles from './app-style'



class App extends Component{
  constructor(props){
    super(props)
    this.state={toList:''}
    
  }

  render() {
    return (
      <View style={styles.container}>
         <TextInput placeholder="Enter Name" onChangeText={(text) => this.props.Add(text)}
            clearTextOnFocus={true}/>
            <TextComponent style={styles.txt} text={this.props.name} />
          
       
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    name : state
  
})
const mapDispatchToProps = ({
   Add :action.intCounter
})

const AppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)

  export default AppWrapper