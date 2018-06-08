import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../../actions/authActions';
import PlacesList from '../../components/place/PlacesList';
import * as placeActions from '../../actions/placeActions';

class PlacesContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false,
      place: Object.assign({}, props.place),
      isAuthenticated: this.props.isLoggedIn()
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isAuthenticated: nextProps.isLoggedIn() });
  }

  componentDidMount() {
    this.props.getPlaces();
  }

  render() {
    return (
      <div>
        <PlacesList places={this.props.places} ></PlacesList>
      </div>
    );
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}

const mapStateToProps = state => {
  return {
    places: state.places
  };
}

export default connect(mapStateToProps, {
    getPlaces: placeActions.loadPlaces,
    isLoggedIn
})(PlacesContainer)