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
      user: Object.assign({}, props.user),
      canEdit: props.canEdit
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    if (!this.props.user || this.props.user._id !== this.props.userId) {
      this.props.getProfile(this.props.userId);
    }
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
        {this.state.canEdit && <Button color="primary" size="sm" className="create-event-btn" onClick={this.toggleModal}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>}

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
  let userId = user._id;

  if (ownProps.match.params.id) {
    userId = ownProps.match.params.id;
  }

  const canEdit = checkIfCanEdit(profile, user);

  return {
    user: profile,
    canEdit,
    userId
  };
}

export default connect(mapStateToProps, {
  getProfile: userActions.loadProfile,
  updateProfile: userActions.updateProfile
})(ProfilePage)