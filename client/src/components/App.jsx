import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './layout/Navbar';
import Route from 'react-router-dom/Route';
import Register from './auth/register/Register';
import Login from './auth/login/Login';
import EventsList from '../containers/EventsList';
import ManagePlace from './place/ManagePlace';
import Notification from '../containers/Notification';
import ManageEvent from '../containers/ManageEvent';
import PlacesList from '../containers/place/PlacesList';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Notification />
        <div className="container body-content">
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/event" component={ManageEvent} exact />
          <Route path="/events/:id" component={ManageEvent} />
          <Route path="/events" component={EventsList} exact />
          <Route path="/place" component={ManagePlace} />
          <Route path="/places/:id" component={ManagePlace} />
          <Route path="/places" component={PlacesList} exact />
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
