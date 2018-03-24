import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './layout/Navbar';
import Route from 'react-router-dom/Route';
import Register from './auth/Register';
import Login from './auth/Login';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="container-fluid">
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
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
