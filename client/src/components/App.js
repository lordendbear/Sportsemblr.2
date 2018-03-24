import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './layout/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          {this.props.children}
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
