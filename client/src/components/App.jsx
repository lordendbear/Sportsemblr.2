import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExtendedNavbar from './layout/Navbar';
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
import PrivateRoute from '../components/auth/PrivateRoute.js';
import Admin from '../components/admin/Admin';

import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isAuthenticated: nextProps.isAuthenticated });
  }

  render() {
    return (
      <div className="app">
        <ExtendedNavbar isAuthenticated={this.state.isAuthenticated} />
        <Notification />
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/event" component={ManageEvent} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute path="/events/:id/edit" component={ManageEvent} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/events/:id" component={EventDetails} isAuthenticated={this.state.isAuthenticated} />
              <Route exact path="/events" component={EventsList} />
              <PrivateRoute path="/place" component={ManagePlace} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute path="/places/:id" component={ManagePlace} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/places" component={PlacesList} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute path="/admin" component={Admin} isAuthenticated={this.state.isAuthenticated} />
            </Container>
          </main>
          {this.state.isAuthenticated && <Aside />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
}

const checkAuthenticated = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));

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
