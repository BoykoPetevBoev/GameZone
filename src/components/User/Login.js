import React, { Component } from 'react';
import './Form.css';
import FormHolder from './FormHolder';
import SubmitButton from './SubmitButton'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            err: null
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email === '' || password === '') {
            this.setState({
                err: 'Invalid email or password!'
            })

        } else {
            console.log('dsds: ', this.state);
        }
    }
    render() {
        return (
            <FormHolder className='login' title="Welcome Back!">
                <form onSubmit={this.onSubmit}>
                    <div className="field-wrap">
                        <p>
                            {this.state.err}
                        </p>
                        <input
                            className={this.state.err ? "errorBox" : "loginRequired"}
                            type="text" name="email"
                            placeholder="Email" />
                    </div>
                    <p>
                        
                    </p>
                    <div className="field-wrap">
                        <input
                            className={this.state.err ? "errorBox" : "loginRequired"}
                            type="password" name="password"
                            placeholder="Password" />
                    </div>


                    <SubmitButton value='LOGIN' />

                </form>
            </FormHolder>
        );
    };
};

export default Login;