import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className="field-wrap">
                <input
                    className="registerRequired"
                    type="password"
                    name="rePassword"
                    placeholder="Confirm Password"
                    value={this.state.rePassword}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Input;