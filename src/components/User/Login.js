import React, { Component } from 'react';
import FormHolder from './form-holder';
import SubmitButton from './submit-button'
import './form.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            err: null
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email === '' || password === '') {
            this.setState({
                err: 'Invalid email or password!'
            });

        } else {
            console.log(this.state);
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
                            placeholder="Email" 
                            value={this.state.firstName}
                            onChange={this.onChange} />
                    </div>
                    <p>
                        
                    </p>
                    <div className="field-wrap">
                        <input
                            className={this.state.err ? "errorBox" : "loginRequired"}
                            type="password" name="password"
                            placeholder="Password" 
                            value={this.state.firstName}
                            onChange={this.onChange} />
                    </div>

                    <SubmitButton value='LOGIN' />

                </form>
            </FormHolder>
        );
    };
};

export default Login;