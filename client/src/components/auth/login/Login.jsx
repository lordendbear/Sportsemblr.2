import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, isLoggedIn } from '../../../actions/authActions';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      redirectToReferrer: false
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

    this.props.login(user).then(() => {
      // this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    const isLoggedIn = this.props.isLoggedIn();

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    if (isLoggedIn) {
      return <Redirect to={from} />
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={(e) => this.onEmailChange(e.target.value)}
                        value={this.state.user.email} type="text" placeholder="Enter your email" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={(e) => this.onPasswordChange(e.target.value)}
                        value={this.state.user.password} type="password" placeholder="Password" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button onClick={() => this.onLoginClick()}
                          color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Registration is free and will always be.</p>
                      <Button tag={Link} to='/register' color="primary" className="mt-3" active>
                        Create an account
                          </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login, isLoggedIn }, dispatch)
};

export default connect(null, mapDispatchToProps)(Login);