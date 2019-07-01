import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import { name as appName } from './app.json'
import AppStack from './src/navigation'
import Store from './src/store'



const wrapRedux = () => {
    return (
        <Provider store = {Store}>
           <AppStack/>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => wrapRedux)
