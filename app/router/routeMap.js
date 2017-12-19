import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import NotFound from '../containers/404'

export default class RouteMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
