import { createAppContainer,createStackNavigator } from 'react-navigation'
import App from '../screen/App'
import Screen1 from '../screen/Screen2'

const AppStack = createStackNavigator({
    App :{
        screen: App
    },
    Screen1 :{
        screen:Screen1
    }
})

export default createAppContainer(AppStack)