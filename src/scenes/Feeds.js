import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('Feeds')
@observer
class Feeds extends Component {
    componentWillMount(){
        this.props.Feeds.refresh();
    }

    render() {
        return (
            <div>
                {this.props.Feeds.feeds.map(feed=>feed.name)}
            </div>
        )
    }
}

export default Feeds; 