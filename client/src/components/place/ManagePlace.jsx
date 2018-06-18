import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';
import { savePlace } from '../../actions/placeActions';
import { checkIfEmptyObject } from '../../util';
import { SPORTS_SUGGESTIONS } from '../../util/constants';

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
      saving: false,
      selectedSports: [
        { id: 1, name: "Handball" }
      ],
      sportSuggestions: SPORTS_SUGGESTIONS
    };

    this.savePlace = this.savePlace.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.place.id !== nextProps.place.id) {
      this.setState({ place: Object.assign({}, nextProps.place) });
    }
  }

  handleDelete(i) {
    const selectedSports = this.state.selectedSports.slice(0)
    selectedSports.splice(i, 1)
    this.setState({ selectedSports })
  }

  handleAddition(selectedSport) {
    const selectedSports = [].concat(this.state.selectedSports, selectedSport)
    this.setState({ selectedSports })
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

    this.props.savePlace({ ...this.state.place, sports: this.state.selectedSports })
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
                      placeholder="Wonderful place, come to us" onChange={(e) => this.inputChange(e.target.value, 'description')} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="multiple-select">Sports offered</Label>
                  </Col>
                  <Col md="9">
                    <FormText color="muted">Press ctrl or drag</FormText>
                    <ReactTags
                      tags={this.state.selectedSports}
                      suggestions={this.state.sportSuggestions}
                      handleDelete={this.handleDelete.bind(this)}
                      handleAddition={this.handleAddition.bind(this)}
                      autoresize={false}
                      minQueryLength={1}
                      allowNew={true}
                      delimiterChars={['Tab', 'Enter', ',']}
                      placeholder={"Input sports"} />
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
                      <Input type="text" id="input3-group2" name="input3-group2" placeholder="Facebook page" onChange={(e) => this.inputChange(e.target.value, 'page')} />
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
  place: PropTypes.object,
  savePlace: PropTypes.func.isRequired
};

ManagePlace.defaultPropTypes = {
  place: null
}

const getPlaceById = (places, id) => {
  const placeList = places.filter((e) => e.id === id);

  if (placeList.length) {
    return placeList[0];
  }

  return { name: '' };
};

function mapStateToProps(state, ownProps) {
  if (checkIfEmptyObject(state.places)) {
    return {};
  }

  const id = +ownProps.match.params.id;

  const place = getPlaceById(state.places.places, id);

  return {
    place
  };
}

export default connect(mapStateToProps, { savePlace })(ManagePlace);
