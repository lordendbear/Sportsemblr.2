import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/authActions';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    onEmailChange(email) {
        const user = this.state.user;

        user.email = email;
        this.setState({ user });
    }

    onPasswordChange(password) {
        const user = this.state.user;

        user.password = password;
        this.setState({ user });
    }

    onLoginClick() {
        const user = this.state.user;
        this.props.login(user);
    }

    render() {
        return (
            < div className="main-login main-center" >
                <form className="form-horizontal" method="post" action="#">

                    <div className="form-group">
                        <label htmlFor="email" className="cols-sm-2 control-label">Email</label>
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                <input onChange={(e) => this.onEmailChange(e.target.value)}
                                    value={this.state.user.email} type="text" className="form-control" name="email" id="email" placeholder="Enter your Email" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input onChange={(e) => this.onPasswordChange(e.target.value)}
                                    value={this.state.user.password} type="password" className="form-control" name="password" id="password" placeholder="Enter your Password" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group ">
                        <button type="button" className="btn btn-primary btn-lg btn-block login-button" onClick={() => this.onLoginClick()}>Login</button>
                    </div>
                    <div className="login-register">
                        <a href="index.php">Register</a>
                    </div>
                </form>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch)
};

export default connect(null, mapDispatchToProps)(Login);