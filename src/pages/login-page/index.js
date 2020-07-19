import React, { Component } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import FormHolder from '../../components/user-form-holder';
import SubmitButton from '../../components/user-submit-button';
import Input from '../../components/user-input';

class LoginPage extends Component {
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
            console.log('login: ', this.state);
        }
    }
    render() {
        return (
            <div className={styles.background}>
                <Header />
                <FormHolder className='login' title="Welcome Back!">
                    <form onSubmit={this.onSubmit}>
                        <Input 
                            name='email'
                            err={this.state.err}
                            type='text'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <Input 
                            name='password'
                            err={this.state.err ? true : false}
                            type='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        <SubmitButton value='LOGIN' />
                    </form>
                </FormHolder>
            </div>
        );
    };
};

export default LoginPage;
