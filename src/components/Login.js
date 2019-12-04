import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './custom_login.css';

import './template/stisla-master/node_modules/bootstrap-social/bootstrap-social.css';

import './template/stisla-master/assets/css/style.css';
import './template/stisla-master/assets/css/components.css';

class Login extends Component {

    async componentDidMount() {
        this.loadScript('https://code.jquery.com/jquery-3.3.1.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');
        this.loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js');
        this.loadScript('./template/stisla-master/assets/js/stisla.js');

        this.loadScript('./template/stisla-master/assets/js/scripts.js');
        this.loadScript('./template/stisla-master/assets/js/custom.js');
    }

    loadScript = function (src) {
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.head.appendChild(tag);
    }

    render() {
        return (
                <div id="app">
                    <section className="section">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                    <div className="login-brand">
                                        <img src={require("./template/stisla-master/assets/img/stisla-fill.svg")} alt="logo" width="100" className="shadow-light rounded-circle" />
                                    </div>

                                    <div className="card card-primary">
                                        <div className="card-header"><h4>Login</h4></div>

                                        <div className="card-body">
                                            <form method="POST" action="#" className="needs-validation" noValidate="">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input id="email" type="email" className="form-control" name="email" tabIndex="1" required autoFocus />
                                                    <div className="invalid-feedback">
                                                        Please fill in your email
                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="d-block">
                                                        <label htmlFor="password" className="control-label">Password</label>
                                                        <div className="float-right">
                                                            <a href="auth-forgot-password.html" className="text-small">
                                                                Forgot Password?
                        </a>
                                                        </div>
                                                    </div>
                                                    <input id="password" type="password" className="form-control" name="password" tabIndex="2" required />
                                                    <div className="invalid-feedback">
                                                        please fill in your password
                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me" />
                                                        <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <Link to="/dashboard">
                                                    <button className="btn btn-primary btn-lg btn-block" tabIndex="4">
                                                        Login
                    </button>
                                                    </Link>
                                                </div>
                                            </form>
                                            <div className="text-center mt-4 mb-3">
                                                <div className="text-job text-muted">Login With Social</div>
                                            </div>
                                            <div className="row sm-gutters">
                                                <div className="col-6">
                                                    <Link to="/dashboard" className="btn btn-block btn-social btn-facebook">
                                                        <span className="fab fa-facebook"></span> Facebook
                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <a className="btn btn-block btn-social btn-twitter">
                                                        <span className="fab fa-twitter"></span> Twitter
                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-5 text-muted text-center">
                                        Don't have an account? <a href="auth-register.html">Create One</a>
                                    </div>
                                    <div className="simple-footer">
                                        Copyright &copy; Stisla 2018
            </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
}

export default Login;