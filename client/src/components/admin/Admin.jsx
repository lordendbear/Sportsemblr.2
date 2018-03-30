import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminRoute from './common/AdminRoute';
import ManageSports from './sport/ManageSports';

class Admin extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <AdminRoute path="/admin/sports" component={ManageSports} isAuthorized={this.props.isAuthorized} />
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
