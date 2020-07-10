import React, { Component } from 'react';
import axios from 'axios';
import FormHolder from './FormHolder';
import SubmitButton from './SubmitButton';
import './Form.css';

class Register extends Component {
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
        if (phone === '') {
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

        console.log('I am sending request');
        const user = this.state
        axios.post('http://localhost:5000/register', user)
            .then(res => {
                console.log(res);
            })

    }
    render() {
        return (

            <FormHolder className='register' title='Sign Up for Free'>

                <form onSubmit={this.onSubmit}>

                    <div className="field-wrap">
                        <p>
                            {this.state.errFirstName}
                        </p>
                        <input
                            name="firstName"
                            className={this.state.errFirstName ? 'errorBox' : 'registerRequired'}
                            type="text"
                            placeholder='First Name'
                            value={this.state.firstName}
                            onChange={this.onChange} />
                    </div>
                    <div className="field-wrap">
                        <p>
                            {this.state.errLastName}
                        </p>
                        <input
                            name="lastName"
                            className={this.state.errLastName ? 'errorBox' : 'registerRequired'}
                            type="text"
                            placeholder='Last Name'
                            value={this.state.lastName}
                            onChange={this.onChange} />
                    </div>
                    <div className="field-wrap">
                        <p>
                            {this.state.errEmail}
                        </p>
                        <input
                            name="email"
                            className={this.state.errEmail ? 'errorBox' : 'registerRequired'}
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange} />
                    </div>
                    <div className="field-wrap">
                        <p>
                            {this.state.errPhone}
                        </p>
                        <input
                            name="phone"
                            className={this.state.errPhone ? 'errorBox' : 'registerRequired'}
                            type="text"
                            placeholder="Phone Number"
                            value={this.state.phoneNumber}
                            onChange={this.onChange} />
                    </div>
                    <div className="field-wrap">
                        <p>
                            {this.state.errPassword}
                        </p>
                        <input
                            className={this.state.errPassword ? 'errorBox' : 'registerRequired'}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </div>
                    <div className="field-wrap">
                        <p>
                            {this.state.errRePassword}
                        </p>
                        <input
                            className={this.state.errRePassword ? 'errorBox' : 'registerRequired'}
                            type="password"
                            name="rePassword"
                            placeholder="Confirm Password"
                            value={this.state.rePassword}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="submit-button" >Get Started</button>
                    {/* <SubmitButton value='GET STARTED' /> */}

                </form>
            </FormHolder>
        );
    };
};
export default Register;