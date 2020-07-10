import React, { Component } from 'react';
import styles from './submit-button.module.css'

class SubmitButton extends Component {
    render() {
        return (
        <button type="submit" className={styles['submit-button']} >{this.props.value}</button>
        );
    }
}

export default SubmitButton;