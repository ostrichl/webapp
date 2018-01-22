import React from 'react'
import PuerRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

class List extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PuerRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="list-container">
                {
                    this.props.data.map((item, index) => {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}

export default List