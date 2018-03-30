import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminRoute from './common/AdminRoute';

class Admin extends Component {
  render() {
    return (
      <div >
        {/* <AdminRoute path="/sports" component={ManageSports} /> */}
      </div>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.object,
}

const checkAuthorized = () => {
  // Do checks...

  return true;
};

function mapStateToProps(state, ownProps) {
  const isAuthorized = checkAuthorized();

  return { isAuthorized };
}

export default connect(mapStateToProps)(Admin);
