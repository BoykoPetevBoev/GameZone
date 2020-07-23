
import React, { Component } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import FormHolder from '../../components/user-form-holder';
import SubmitButton from '../../components/user-submit-button';
import Input from '../../components/user-input';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: '',
            errFirstName: null,
            errLastName: null,
            errEmail: null,
            errPassword: null,
            errRePassword: null
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    validateForm = () => {
        this.setState({
            errFirstName: null,
            errLastName: null,
            errEmail: null,
            errPassword: null,
            errRePassword: null
        })
        const { firstName, lastName, email, password, rePassword } = this.state;
        let result = true;
        if (firstName === '' || firstName.length < 2 || firstName.length > 50) {
            this.setState({
                errFirstName: 'Your first name must be between 2 and 50 characters!'
            });
            result = false;
        }
        if (lastName === '' || lastName.length < 2 || lastName.length > 50) {
            this.setState({
                errLastName: 'Your last name must be between 2 and 50 characters!'
            });
            result = false;
        }
        if (email === '' || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            this.setState({
                errEmail: 'Enter a valid email address!'
            });
            result = false;
        }
        if (password === '' || password.length < 3 || password.length > 50) {
            this.setState({
                errPassword: 'Password must be between 3 and 15 caracter long!'
            })
            result = false;
        }
        if (rePassword !== password) {
            this.setState({
                errRePassword: 'Password and Repeat password must be the same!'
            })
            result = false;
        }
        return result;
    }
    registerHandler = async () => {
        const user = this.state;
        const url = 'http://localhost:5000/register';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        this.props.history.push('/');
        console.log(response);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validateForm();
        if (isValid) {
            this.registerHandler();
        }
    }
    render() {
        return (
            <div className={styles.background}>
                <Header />

                <FormHolder className='register' title='Sign Up for Free'>
                    <form onSubmit={this.onSubmit}>
                        <Input
                            name="firstName"
                            err={this.state.errFirstName}
                            type="text"
                            placeholder='First Name'
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                        <Input
                            name="lastName"
                            err={this.state.errLastName}
                            type="text"
                            placeholder='Last Name'
                            value={this.state.lastName}
                            onChange={this.onChange}
                        />
                        <Input
                            name="email"
                            err={this.state.errEmail}
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <Input
                            err={this.state.errPassword}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        <Input
                            err={this.state.errRePassword}
                            type="password"
                            name="rePassword"
                            placeholder="Confirm Password"
                            value={this.state.rePassword}
                            onChange={this.onChange}
                        />
                        <SubmitButton value='GET STARTED' />
                    </form>
                </FormHolder>
            </div>
        );
    };
};
export default RegisterPage;