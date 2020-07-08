import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onchangeLastName = this.onchangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            rePassword: ''
        }
    }
    onChangeFirstName(e) {
        checkForEmpty(e.target)
        this.setState({
            firstName: e.target.value
        });
    }
    onchangeLastName(e) {
        checkForEmpty(e.target)
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeEmail(e) {
        checkForEmpty(e.target)
        this.setState({
            email: e.target.value
        });
    }
    onChangePhoneNumber(e) {
        checkForEmpty(e.target)
        this.setState({
            phoneNumber: e.target.value
        });
    }
    onChangePassword(e) {
        checkForEmpty(e.target)
        this.setState({
            password: e.target.value
        });
    }
    onChangeRePassword(e) {
        checkForEmpty(e.target)
        this.setState({
            rePassword: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="form">
                <div className="tab-content">

                    <ul className="tab-group">
                        <li className="tab active"><a href="/register">Register</a></li>
                        <li className="tab"><a href="/login">Login</a></li>
                    </ul>

                    <div id="signup">
                        <h1>Sign Up for Free</h1>

                        <form onSubmit={this.onSubmit}>

                            <div className="field-wrap">
                                <input
                                    name="firstName"
                                    id="registerFirstName"
                                    className="registerRequired"
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                />
                            </div>

                            <div className="field-wrap">
                                <input
                                    name="lastName"
                                    id="registerLasttName"
                                    className="registerRequired"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.onchangeLastName}
                                />
                            </div>

                            <div className="field-wrap">
                                <input
                                    name="email"
                                    id="registerEmail"
                                    className="registerRequired"
                                    type="text"
                                    placeholder="Email Address"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>

                            <div className="field-wrap">
                                <input
                                    name="phone"
                                    id="registerPhone"
                                    className="registerRequired"
                                    type="text"
                                    placeholder="Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={this.onChangePhoneNumber}
                                />
                            </div>

                            <div className="field-wrap">
                                <input
                                    id="registerPassword"
                                    className="registerRequired"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                            </div>

                            <div className="field-wrap">
                                <input
                                    id="registerRePassword"
                                    className="registerRequired"
                                    type="password"
                                    name="rePassword"
                                    placeholder="Confirm Password"
                                    value={this.state.rePassword}
                                    onChange={this.onChangeRePassword}
                                />
                            </div>

                            <button type="submit" className="button button-block">GET STARTED</button>

                        </form>

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