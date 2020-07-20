
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
            phone: '',
            password: '',
            rePassword: '',
            errFirstName: null,
            errLastName: null,
            errEmail: null,
            errPhone: null,
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
            errPhone: null,
            errPassword: null,
            errRePassword: null
        })
        const { firstName, lastName, email, phone, password, rePassword } = this.state;
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
        if (email === '' || !email.includes('@')) {
            this.setState({
                errEmail: 'Enter a valid email address!'
            });
            result = false;
        }
        if (phone === '' || isNaN(Number(phone))) {
            this.setState({
                errPhone: 'Enter a valid phone number!'
            })
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

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validateForm();
        if (isValid) {
            const user = this.state
            console.log(user);
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
                            name="phone"
                            err={this.state.errPhone}
                            type="text"
                            placeholder="Phone Number"
                            value={this.state.phoneNumber}
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