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
import EventDetails from '../containers/event/EventDetails';

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
          <Route path="/events/:id/edit" component={ManageEvent} />
          <Route path="/events/:id" component={EventDetails} exact />
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

const checkAuthenticated = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    // TODO: checks for expired
    return !!auth.token;
  }

  return false;
};

function mapStateToProps(state, ownProps) {
  const isAuthenticated = checkAuthenticated();

  return { isAuthenticated };
}

export default connect(mapStateToProps)(App);
