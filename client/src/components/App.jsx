import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './layout/Navbar';
import Route from 'react-router-dom/Route';
import Register from './auth/register/Register';
import Login from './auth/login/Login';
import ManagePlace from './place/ManagePlace';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div className="container">
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/places/new" component={ManagePlace} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(App);
