import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions';
import Profile from '../../components/profile/Profile';
import React from 'react';
import {
  Button
} from 'reactstrap';

import UpdateProfileModal from '../../components/profile/UpdateProfileModal';

class ProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false,
      user: Object.assign({}, props.event),
      canEdit: props.canEdit
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps, ownProps) {
    if (!ownProps.user && nextProps.user) {
      this.setState({
        user: nextProps.user,
        canEdit: nextProps.canEdit
      });
    }
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  updateProfile(newProfile) {
    this.props.updateProfile(newProfile)
      .then(() => {
        this.toggleModal();
        this.props.getProfile(this.props.match.params.id);
      })
  }

  render() {
    return (
      <div>
        {this.state.canEdit && <Button color="primary" size="sm" className="float-right" onClick={this.toggleModal}>Edit Profile</Button>}

        {this.state.isOpen && <UpdateProfileModal closeModal={this.toggleModal} user={this.state.user} onInputChange={this.inputChange} save={this.updateProfile}></UpdateProfileModal>}

        <Profile user={this.state.user}></Profile>
      </div>
    );
  }
}

const checkIfCanEdit = (profile, user) => {
  if (profile && user) {
    return profile._id === user._id;
  }

  return false;
}

const mapStateToProps = (state, ownProps) => {
  const user = state.auth.user;
  let profile = state.user.profile;

  if (!ownProps.match.params.id) {
    profile = Object.assign({}, user);
  }

  const canEdit = checkIfCanEdit(profile, user);

  return {
    user: profile,
    canEdit
  };
}

export default connect(mapStateToProps, {
  getProfile: userActions.loadProfile,
  updateProfile: userActions.updateProfile
})(ProfilePage)