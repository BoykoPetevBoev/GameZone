import React, { Component } from 'react';
import './FormHolder.css'

class FormHolder extends Component {
    render() {
        return (
            <div className={this.props.className} >
                <div className="form-holder">
                    <h1>{this.props.title}</h1>
                    <div>
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default FormHolder;