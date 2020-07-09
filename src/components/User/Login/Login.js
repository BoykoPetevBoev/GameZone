import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="loginBackground">
                <div className="form">
                    <div className="tab-content">

                        {/* <ul className="tab-group">
                            <li className="tab"><a href="/register">Register</a></li>
                            <li className="tab active"><a href="/login">Login</a></li>
                        </ul> */}

                        <div id="login">
                            <h1>Welcome Back!</h1>

                            <form action="/login" method="POST">

                                <div className="field-wrap">
                                    <input className="loginRequired" id="loginEmail" type="text" name="email" placeholder="Email" />
                                </div>

                                <div className="field-wrap">
                                    <input className="loginRequired" id="loginPassword" type="password" name="password" placeholder="Password" />
                                </div>

                                <button type="submit" className="button button-block" >LOGIN</button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Login;