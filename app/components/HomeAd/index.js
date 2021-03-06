import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

let img = require('../../static/img/2.png')

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                                <img src={img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
        
    }
}

export default HomeAd