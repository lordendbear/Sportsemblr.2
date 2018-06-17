import React from 'react';
import { connect } from 'react-redux';
import UsersList from './UserList';
import * as userActions from '../../../actions/userActions';

class ManageUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users
    });
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  deleteUser = (user) => {
    this.props.deleteUser(user);
  }

  render() {
    return (
      <UsersList users={this.state.users} delete={this.deleteUser} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let users = [];
  if (state.user.users && state.user.users.length) {
    users = state.user.users
      .filter(u => u._id !== state.auth.user._id);
  }

  return {
    users
  }
}

export default connect(mapStateToProps, {
  loadUsers: userActions.loadUsers,
  deleteUser: userActions.deleteUser,
  // makeAdmin: userActions.makeAdmin,
  // removeAdmin: userActions.removeAdmin
})(ManageUsers)