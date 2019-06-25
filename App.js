
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text,TextInput, FlatList,View} from 'react-native';

import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {intCounter} from './src/action/action'


function mapStateToProps(state){
  return{
    name : state.name
  }
}
function mapDispatchToProps(dispatch){
  
return bindActionCreators({
  Add :intCounter
},dispatch)

}

 export class App extends Component{
  constructor(props){
    super(props)
    this.state={toList:''}
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View >
          <TextInput placeholder="Enter Name" onChangeText={(text) => this.props.Add(text)}
          clearTextOnFocus={true}/>
          <Text style={styles.welcome}>{this.props.name}</Text>
          
          
        
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position :'relative'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
   
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
