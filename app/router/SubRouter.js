import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../containers/Home'
// import City from '../containers/City'
import NotFound from '../containers/404'

export default class SubRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route path="router" component={City}/> */}
                <Route component={NotFound}/>
            </Switch>
        )
    }
}