import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isLoggedIn } from '../../actions/authActions.js';
import '../../scss/home.scss';

import { Link } from 'react-router-dom';
import {
  NavLink,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Badge
} from 'reactstrap';

import sport1 from '../../img/sports/sport1.jpg';
import sport2 from '../../img/sports/sport2.jpg';
import sport3 from '../../img/sports/sport3.jpg';
import sport4 from '../../img/sports/sport4.jpg';
import sport5 from '../../img/sports/sport5.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: this.getRandomInt(0, 4),
      images: [sport1, sport2, sport3, sport4, sport5],
      user: this.props.user,
      latestEvents: this.props.events
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getDateText = (date) => {
    return new Date(date).toLocaleString('bg-BG');
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user,
      latestEvents: nextProps.events
    });
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn();
    const image = this.state.images[this.state.imageIndex];

    return (
      <div className="app">
        <img src={image} alt="" className="background-home" />
        <div className="overlay"></div>
        <div className="home-title-wrapper"> {
          isLoggedIn ?
            <div className="heading-main"><h2>Hi, {this.state.user.name}, check out the latest upcoming events: </h2></div> :
            <NavLink className="login-link" tag={Link} to='/login'> LOGIN OR SIGN UP TO DISCOVER SPORT EVENTS </NavLink>
        }
        </div>
        {this.state.latestEvents && this.state.latestEvents.length && this.state.latestEvents
            .map(e => (<Card key={e._id}>
              <CardBody>
                <CardTitle>
                  <Link to={'/events/' + e._id}>{e.title}</Link>
                </CardTitle>
                <CardSubtitle>{this.getDateText(e.date)} <em>(starting in {Math.round(Math.abs(Date.now() - e.date) / 36e5)} h)</em></CardSubtitle>
                <Badge color="info">{e.sport}</Badge>
                <CardText>{e.address ? e.address : <em>No address provided</em>}</CardText>
                <CardText>Description: {e.description}</CardText>
              </CardBody>
            </Card>))}
      </div>
    );
  }
}

const getLatestEvents = (howMuch, events) => {
  if(!events || !events.length) {
    return null;
  }

  events = events.filter(e => new Date(e.date) > new Date());

  return events.sort((a,b) => new Date(a.date) - new Date(b.date)).slice(0, howMuch);
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    events: getLatestEvents(3, state.events.events)
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ isLoggedIn }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);