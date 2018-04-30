import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn } from '../../actions/authActions.js';
import '../../scss/home.scss';

import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';

import sport1  from '../../img/sports/sport1.jpg';
import sport2  from '../../img/sports/sport2.jpg';
import sport3  from '../../img/sports/sport3.jpg';
import sport4  from '../../img/sports/sport4.jpg';
import sport5  from '../../img/sports/sport5.jpg';

class Home extends Component {
    constructor() {
      super();

      this.state = {
        imageIndex: this.getRandomInt(0,4),
        images: [sport1, sport2, sport3, sport4, sport5]
      }
    }

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn();
        const image = this.state.images[this.state.imageIndex];
        const here = <NavLink tag={Link} to='/login' exact>
            Login
        </NavLink>;

        return (
          <div className="app flex-row align-items-center">
            <img src={image} alt="" className="background-home" />
            <div className="overlay"></div>
            <div className="home-title-wrapper"> { 
                isLoggedIn ? 
                  `Hi, User` :
                  <NavLink className="login-link" tag={Link} to='/login' exact> LOGIN OR SIGN UP TO DISCOVER SPORT EVENTS </NavLink>
                }
           </div>
          </div>
        );
      }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ isLoggedIn }, dispatch)
};

export default connect(null, mapDispatchToProps)(Home);