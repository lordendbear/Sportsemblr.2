import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import Aside from '../components/aside/Aside';
import Profile from '../components/profile/Profile';
import Home from '../components/home/Home';

import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Notification />
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/event" component={ManageEvent} />
              <Route path="/events/:id/edit" component={ManageEvent} />
              <Route exact path="/events/:id" component={EventDetails} />
              <Route exact path="/events" component={EventsList} />
              <Route path="/place" component={ManagePlace} />
              <Route path="/places/:id" component={ManagePlace} />
              <Route exact path="/places" component={PlacesList} />
              <Route exact path="/profile" component={Profile} />
            </Container>
          </main>
          <Aside />
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
