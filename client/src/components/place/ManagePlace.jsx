import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savePlace } from '../../actions/placeActions';

import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

export class ManagePlace extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      place: Object.assign({}, this.props.place),
      errors: {},
      saving: false
    };

    this.savePlace = this.savePlace.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.place.id !== nextProps.place.id) {
      this.setState({ place: Object.assign({}, nextProps.place) });
    }
  }

  formIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.place.name.length < 3) {
      errors.name = 'Name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });

    return formIsValid;
  }

  savePlace(event) {
    event.preventDefault();

    if (!this.formIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.savePlace(this.state.place)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.props.history.push('/places');
  }

  inputChange(value, property) {
    let place = Object.assign({}, this.state.place);

    place[property] = value;

    this.setState({ place });
  }

  render() {
    return (
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader>
              <strong>Create/Edit place</strong>
            </CardHeader>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Enter name" onChange={(e) => this.inputChange(e.target.value, 'name')}
                      value={this.state.place.name} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Description</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                      placeholder="Wonderful place, come to us" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="multiple-select">Sports you are interested in</Label>
                  </Col>
                  <Col md="9">
                    <FormText color="muted">Press ctrl or drag</FormText>
                    <Input type="select" name="multiple-select" id="multiple-select" multiple>
                      <option value="1">Football</option>
                      <option value="2">Basketball</option>
                      <option value="3">Tennis</option>
                      <option value="4">Volleyball</option>
                      <option value="5">Cricket</option>
                      <option value="6">Table Tennis</option>
                    </Input>
                  </Col>
                </FormGroup>
                {/* Fuck linters */}
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">Social link</Label>
                  </Col>
                  <Col md="9">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <Button type="button" color="primary"><i className="fa fa-facebook"></i></Button>
                      </InputGroupAddon>
                      <Input type="text" id="input3-group2" name="input3-group2" placeholder="Facebook page" />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="file-input">Add photo</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input" />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="xl" color="primary" onClick={(ev) => this.savePlace(ev)}><i className="fa fa-dot-circle-o"></i> Create</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    );
  }
}

ManagePlace.propTypes = {
  place: PropTypes.object.isRequired,
  savePlace: PropTypes.func.isRequired
};

const getPlaceById = (places, id) => {
  const placeList = places.filter((e) => e.id === id);

  if (placeList.length) {
    return placeList[0];
  }

  return { name: '' };
};

function mapStateToProps(state, ownProps) {
  const id = +ownProps.match.params.id;

  const place = getPlaceById(state.places, id);

  return {
    place
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ savePlace }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePlace);
