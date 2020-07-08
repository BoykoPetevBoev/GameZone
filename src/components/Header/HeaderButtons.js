import React, { Component } from 'react';
import './HeaderButtons.css'

export default class HeaderButtons extends Component {
    render() {
        return (
            <div className="skewDiv">
                <a className="headerBtn" href={this.props.path}>{ this.props.name }</a>
            </div>
        )
    }
};
