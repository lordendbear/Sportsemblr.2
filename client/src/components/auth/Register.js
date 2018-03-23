import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
    }

    onNameChange(event) {
        const user = this.state.user;

        user.name = event.target.value;
        this.setState({ user });
    }

    onEmailChange(event) {
        const user = this.state.user;

        user.email = event.target.value;
        this.setState({ user });
    }

    onPasswordChange(event) {
        const user = this.state.user;

        user.password = event.target.value;
        this.setState({ user });
    }

    onConfirmPasswordChange(event) {
        const user = this.state.user;

        const confirmPassword = event.target.value;

        if (confirmPassword !== user.password) {
            const errors = this.state.errors;
            errors.confirmPassword = 'Passwords do not match';

            this.setState({
                errors
            })
        } else {
            user.confirmPassword = confirmPassword;

            this.setState({ user });

            const errors = this.state.errors;

            this.setState({
                errors
            })
        }
    }

    onRegisterClick() {
        const user = this.state.user;

        console.log(user);
    }

    render() {
        return (
            < div className="main-login main-center" >
                <form className="form-horizontal" method="post" action="#">

                    <div className="form-group">
                        <label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                <input type="text" className="form-control"
                                    name="name" id="name"
                                    onChange={this.onNameChange}
                                    value={this.state.user.name}
                                    placeholder="Enter your Name" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                <input onChange={this.onEmailChange}
                                    value={this.state.user.email} type="text" className="form-control" name="email" id="email" placeholder="Enter your Email" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input onChange={this.onPasswordChange}
                                    value={this.state.user.password} type="password" className="form-control" name="password" id="password" placeholder="Enter your Password" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label" htmlFor="inputError">Confirm Password</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input onChange={this.onConfirmPasswordChange}
                                value={this.state.user.confirmPassword} type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" />
                        </div>
                        <span className="help-block">{this.state.errors.confirmPassword}</span>
                    </div>

                    <div className="form-group ">
                        <button type="button" className="btn btn-primary btn-lg btn-block login-button" onClick={this.onRegisterClick}>Register</button>
                    </div>
                    <div className="login-register">
                        <a href="index.php">Login</a>
                    </div>
                </form>
            </div >
        );
    }
}

export default Register;