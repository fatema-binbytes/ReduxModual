import { createAppContainer,createStackNavigator } from 'react-navigation'

import App from '../screen/App'
import Screen1 from '../screen/Screen'

const AppStack = createStackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            header:null
        }
    },
    Screen1: {
        screen: Screen1,
    }
    
})

export default createAppContainer(AppStack)