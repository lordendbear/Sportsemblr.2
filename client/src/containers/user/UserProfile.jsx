import { bindActionCreators } from 'redux';
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

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: bindActionCreators(userActions.loadProfile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)