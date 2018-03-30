import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savePlace } from '../../actions/placeActions';
import PlaceForm from './PlaceForm';

export class ManagePlace extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      place: Object.assign({}, this.props.place),
      errors: {},
      saving: false
    };

    this.savePlace = this.savePlace.bind(this);
    this.updatePlaceState = this.updatePlaceState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.place.id !== nextProps.place.id) {
      this.setState({ place: Object.assign({}, nextProps.place) });
    }
  }

  updatePlaceState(event) {
    const field = event.target.name;
    let place = Object.assign({}, this.state.place);
    place[field] = event.target.value;
    return this.setState({ place });
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
    this.setState({ saving: false });
  }

  render() {
    return (
      <PlaceForm
        place={this.state.place}
        onChange={this.updatePlaceState}
        onSave={this.savePlace}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        saving={this.state.saving}
      />
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
