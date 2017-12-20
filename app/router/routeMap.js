import React from 'react'
import { Router, Route } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import App from '../containers'
import SubRouter from './SubRouter'

export default class RouteMap extends React.Component {
    render() {
        return (
            <Router history={customHistory}>
                <App>
                    <Route path="/" component={SubRouter}/>
                </App>
            </Router>
        )
    }
}
