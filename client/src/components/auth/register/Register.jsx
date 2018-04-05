import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../../actions/authActions';
import {Container, Row, Col, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

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
            const errors = this.state.errors;
            errors.confirmPassword = '';

            this.setState({
                errors
            })
        }

        user.confirmPassword = confirmPassword;

        this.setState({ user });
    }

    onRegisterClick() {
        const user = this.state.user;

        this.props.register(user);
    }
    render() {
        return (
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                      <h1>Register</h1>
                      <p className="text-muted">Create your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.onNameChange}
                            value={this.state.user.name}
                            placeholder="Enter your Name"type="text"/>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.onEmailChange}
                            value={this.state.user.email}
                            type="text" placeholder="Email"/>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.onPasswordChange}
                            value={this.state.user.password}
                            type="password" placeholder="Password"/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.onConfirmPasswordChange}
                            value={this.state.user.confirmPassword}
                            type="password" placeholder="Repeat password"/>
                      </InputGroup>
                      <Button onClick={this.onRegisterClick} color="success" block>Create Account</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ register }, dispatch)
};

export default connect(null, mapDispatchToProps)(Register);