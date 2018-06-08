import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions';
import Profile from '../../components/profile/Profile';
import React from 'react';

class ProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { user: {} };
  }

  componentDidMount() {
    this.props.getProfile(this.props.match.params.id);
  }

  render() {
    return (
      <Profile user={this.props.user}></Profile>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.profile
  };
}

export default connect(mapStateToProps, {
  getProfile: userActions.loadProfile
})(ProfilePage)