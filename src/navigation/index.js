import { createAppContainer,createStackNavigator } from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import App from '../screen/App'
import Screen2 from '../screen/Screen1'
import Screen1 from '../screen/Screen2'

const AppStack = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            header:null
        }
    },
    Screen1: {
        screen: Screen1,
        navigationOptions: ({navigation}) => ({
            headerTransparent: true,
            headerLeft:<Icon name={'arrow-left'} size={25} color={'#FFF'} style={{paddingLeft:15}} onPress={() => navigation.goBack()}/>,
            headerRight: <Icon name={'heart-outline'} size={25} color={'#FFF'} style={{paddingRight:15}}/>
        })
    },
    
})

export default createAppContainer(AppStack)