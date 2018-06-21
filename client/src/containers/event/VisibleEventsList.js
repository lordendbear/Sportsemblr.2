import { connect } from 'react-redux'
import EventsList from '../../components/event/EventsList';
import { VisibilityFilters } from '../../actions/eventActions';

const isActive = (event) => {
  let date =event.date;
  date = new Date(date);

  return date > new Date();
}

const getVisibleEvents = (events, action) => {
  switch (action.filter) {
    case VisibilityFilters.SHOW_ALL:
      return events
    case VisibilityFilters.SHOW_INACTIVE:
      return events.filter(e => !isActive(e))
    case VisibilityFilters.SHOW_ACTIVE:
      return events.filter(e => isActive(e))
    case VisibilityFilters.MIN_PRICE_FILTER:
      return events.filter(e => e.totalPrice >= Number(action.args))
    case VisibilityFilters.MAX_PRICE_FILTER:
      return events.filter(e => e.totalPrice <= Number(action.args))
    case VisibilityFilters.SPORT_TYPE_FILTER:
      return events.filter(e => e.sport === action.args)
    case VisibilityFilters.SHOW_FREE_EVENTS:
      return events.filter(e => e.totalPrice === 0)
    default:
      throw new Error('Unknown filter: ' + action.filter)
  }
}

const mapStateToProps = (state, ownProps) => ({
  events: getVisibleEvents(state.events.events, state.visibilityFilter),
})

export default connect(mapStateToProps, null)(EventsList)