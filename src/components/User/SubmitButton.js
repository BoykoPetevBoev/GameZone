import React, { Component } from 'react';
import './SubmitButton.css'

class SubmitButton extends Component {
    render() {
        return (
        <button type="submit" className="submit-button" >{this.props.value}</button>
        );
    }
}

export default SubmitButton;