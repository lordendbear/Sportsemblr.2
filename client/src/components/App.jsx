import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExtendedNavbar from './layout/Navbar';
import Route from 'react-router-dom/Route';
import { withRouter } from 'react-router';
import Register from './auth/register/Register';
import Login from './auth/login/Login';
import EventsContainer from '../containers/EventsContainer';
import PlacesContainer from '../containers/place/PlacesContainer';
import ManagePlace from './place/ManagePlace';
import Notification from '../containers/Notification';
import EventDetailsContainer from '../containers/event/EventDetailsContainer';
import AsideContainer from '../containers/AsideContainer';
import Home from '../components/home/Home';
import PrivateRoute from '../components/auth/PrivateRoute.js';
import Admin from '../components/admin/Admin';
import UserProfile from '../containers/user/UserProfile';
import ManageSports from './admin/sport/ManageSports';
import ManageUsers from './admin/users/ManageUsers';

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
        <ExtendedNavbar isAuthenticated={this.state.isAuthenticated} isAdmin={this.props.isAdmin} />
        <Notification />
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/users/:id" component={UserProfile} />
              <Route exact path="/events/:id" component={EventDetailsContainer} isAuthenticated={this.state.isAuthenticated} />
              <Route exact path="/events" component={EventsContainer} />
              <PrivateRoute path="/place" component={ManagePlace} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute path="/places/:id" component={ManagePlace} isAuthenticated={this.state.isAuthenticated} />
              <Route exact path="/places" component={PlacesContainer} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/profile" component={UserProfile} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/admin/sports" component={ManageSports} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/admin/users" component={ManageUsers} isAuthenticated={this.state.isAuthenticated} />
              <PrivateRoute exact path="/admin" component={Admin} isAuthenticated={this.state.isAuthenticated} />
            </Container>
          </main>
          {this.state.isAuthenticated && <AsideContainer />}
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
  const isAdmin = state.auth && state.auth.user && state.auth.user.role === 'admin';

  return { isAuthenticated, isAdmin };
}

export default withRouter(connect(mapStateToProps)(App));
