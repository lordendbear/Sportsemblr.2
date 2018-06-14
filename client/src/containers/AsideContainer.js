import { connect } from 'react-redux'
import Aside from '../components/aside/Aside';
import { loadEvents } from '../actions/eventActions';

const getUserParticipatedEvents = (allEvents, user) => {
  if(!allEvents || allEvents.length === 0 || !user) {
    return null;
  }
  debugger;
  return allEvents.filter(event => !event.peopleJoined.indexOf(user._id));
}

const getUserEvents = (allEvents, user) => {
  if(!allEvents || allEvents.length === 0 || !user) {
      return null;
  }

  return allEvents.filter(event => event.organizer._id === user._id);
}

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    userEvents: getUserEvents(state.events.events, state.auth.user),
    joinedEvents: getUserParticipatedEvents(state.events.events, state.auth.user),
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { loadEvents })(Aside)
