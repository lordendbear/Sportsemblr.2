import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render() {
    return (
      <div>
        <Link to='/admin/sports'>Sports</Link>
        <hr />
        <Link to='/admin/users'>Users</Link>
      </div>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.object,
}

const checkAuthorized = (user) => {
  return !!user && user.role === 'admin';
};

function mapStateToProps(state, ownProps) {
  const isAuthorized = checkAuthorized(state.auth.user);

  return { isAuthorized };
}

export default connect(mapStateToProps)(Admin);
