import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

class Admin extends Component {
  render() {
    return (
      <div>
        {/* <Link to='/admin/sports'>Sports</Link>
        <hr /> */}
        <Card >
          <CardBody>
            <CardTitle><Link to='/admin/users'>Users</Link></CardTitle>
          </CardBody>
        </Card>
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
