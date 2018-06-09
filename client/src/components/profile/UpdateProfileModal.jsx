import React from 'react';
import Modal from 'react-bootstrap4-modal';
import { Button, FormGroup, Input, Form, Col, Label, Row } from 'reactstrap';

export class UpdateProfileModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, props.user)
    };
  }

  onInputChange = (value, property) => {
    const profile = Object.assign({}, this.state.user);
    profile[property] = value;

    this.setState({ user: profile });
  }

  save = () => {
    const profile = this.state.user;

    this.props.save(profile);
  }

  render() {
    return (<Modal visible={true} onClickBackdrop={this.props.closeModal} dialogClassName="modal-lg">
      <Form onSubmit={ev => ev.preventDefault()}>
        <FormGroup>
          <Row>
            <Col md="8">
              <Label>Name</Label>
              <Input onChange={(e) => this.onInputChange(e.target.value, 'name')}
                value={this.state.user.name} type="text" />
            </Col>
            <Col md="4">
              <Label>Email</Label>
              <Input onChange={(e) => this.onInputChange(e.target.value, 'email')}
                value={this.state.user.email} type="text" />
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <Label>Picture url</Label>
              <Input onChange={(e) => this.onInputChange(e.target.value, 'picture')}
                value={this.state.user.picture || ''} type="text" />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Button type="submit" size="xl" color="primary" onClick={this.save}><i className="fa fa-dot-circle-o"></i> Save</Button>

          <Button size="xl" color="primary" className="float-right" onClick={this.props.closeModal}><i className="fa fa-dot-circle-o"></i> Close</Button>
        </FormGroup>
      </Form>
    </Modal >);
  }
}

// const UpdateProfileModal = ({ isAuthenticated, user, closeModal, onInputChange, saveEvent }) => {

// }

export default UpdateProfileModal;