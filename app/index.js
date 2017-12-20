import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import RouteMap from './router/routeMap'

import './static/css/common.less'
import './static/css/font.css'

//创建redux store对象
const store = configureStore();

render(
    <Provider store={store}>
        <RouteMap/>
    </Provider>,
    document.getElementById('root')
)