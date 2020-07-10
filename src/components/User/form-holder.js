import React, { Component } from 'react';
import styles from './form-holder.module.css'

class FormHolder extends Component {
    render() {
        return (
            <div className={styles[this.props.className]} >
                <div className={styles['form-holder']}>
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