import React, { Component } from 'react';
import './Register.css'

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
            isTrue: false,
            loginEmail: 'Invalid email!',
            loginPassword: 'Invalid password!',
            registerFirstName: false,
            registerLasttName: 'Your last name must be between 2 and 50 characters!',
            registerEmail: 'Enter a valid email address!',
            registerPhone: 'Enter a valid phone number!',
            registerPassword: 'Password must be between 3 and 15 caracter long!',
            registerRePassword: 'Password and Repeat password must be the same!'
        }
    }
    //Your first name must be between 2 and 50 characters!
    onSubmit = (e) => {

        e.preventDefault();
        console.log(this.state);
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        if (e.target.value == '') {
            this.changeIsTrue(true)
            this.setState({
                registerFirstName: 'Your first name must be between 2 and 50 characters!'
            })
        }
        else {
            this.changeIsTrue(false)
            this.setState({
                registerFirstName: false
            })
        }
    }
    changeIsTrue = (value) => {
        this.setState({
            isTrue: value
        })
    }

    render() {
        return (
            <div className="registerBackground">
                <div className="form">
                    <div className="tab-content">

                        {/* <ul className="tab-group">
                            <li className="tab active"><a href="/register">Register</a></li>
                            <li className="tab"><a href="/login">Login</a></li>
                        </ul> */}

                        <div id="signup">
                            <h1>Sign Up for Free</h1>

                            <form onSubmit={this.onSubmit}>

                                <div className="field-wrap">
                                    <input
                                        name="firstName"
                                        className={this.state.isTrue ? 'errorBox' : 'registerRequired'}
                                        type="text"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                    {this.state.registerFirstName
                                        ? <div>{this.state.registerFirstName}</div>
                                        : null}
                                </div>

                                <div className="field-wrap">
                                    <input
                                        name="lastName"
                                        className="registerRequired"
                                        type="text"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="field-wrap">
                                    <input
                                        name="email"
                                        className="registerRequired"
                                        type="text"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="field-wrap">
                                    <input
                                        name="phone"
                                        className="registerRequired"
                                        type="text"
                                        placeholder="Phone Number"
                                        value={this.state.phoneNumber}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="field-wrap">
                                    <input
                                        className="registerRequired"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>

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

                                <button type="submit" className="button button-block">GET STARTED</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function errorMsg(error, elementID) {
    const element = document.getElementById(elementID);
    const msg = {
        loginEmail: 'Invalid email!',
        loginPassword: 'Invalid password!',
        registerFirstName: 'Your first name must be between 2 and 50 characters!',
        registerLasttName: 'Your last name must be between 2 and 50 characters!',
        registerEmail: 'Enter a valid email address!',
        registerPhone: 'Enter a valid phone number!',
        registerPassword: 'Password must be between 3 and 15 caracter long!',
        registerRePassword: 'Password and Repeat password must be the same!'
    }
    if (error) {
        classList(true, element, 'errorBox')
        element.value = '';
        element.placeholder = msg[elementID];
    }
    else {
        classList(false, element, 'errorBox')
    }
}
function checkForEmpty(element) {
    let errors = false;
    const msg = {
        email: 'Enter your email!',
        password: 'Enter your password!',
        firstName: 'Enter your first name!',
        lastName: 'Enter your last name!',
        phone: 'Enter your phone number!',
        rePassword: 'Repeat your password!'
    }
    if (element.value === '') {
        classList(true, element, 'errorBox');
        element.placeholder = msg[element.name];
        errors = true;
    }
    else {
        classList(false, element, 'errorBox');
    }
    return errors;
}
function classList(operation, element, className) {
    operation == true
        ? element.classList.add(className)
        : element.classList.remove(className)
}

export default Register;