import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn } from '../../actions/authActions.js';

class Home extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn();

        return (
          <div className="app flex-row align-items-center">
           Home page - display all events here
           <div>
             <h3> User is { isLoggedIn ? 'LOGGED IN' : 'NOT LOGGED IN' } </h3>
           </div>
          </div>
        );
      }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ isLoggedIn }, dispatch)
};

export default connect(null, mapDispatchToProps)(Home);