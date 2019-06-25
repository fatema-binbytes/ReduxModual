import React from 'react'
import {AppRegistry} from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {name as appName} from './app.json'
import App from './src/screen/App'
import reducers from './src/store/reducer'


const store = createStore(reducers, applyMiddleware(thunk, logger))
const wrapRedux = () => {
    return(
        <Provider store = {store}>
           <App/>
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => wrapRedux);
