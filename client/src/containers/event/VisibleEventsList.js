import { connect } from 'react-redux'
import EventsList from '../../components/event/EventsList';
import { VisibilityFilters } from '../../actions/eventActions';

const getVisibleEvents = (events, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return events
    case VisibilityFilters.SHOW_INACTIVE:
      return events.filter(e => e.status !== 'active')
    case VisibilityFilters.SHOW_ACTIVE:
      return events.filter(e => e.status === 'active')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => ({
  events: getVisibleEvents(state.events.events, state.visibilityFilter),
})

export default connect(mapStateToProps, null)(EventsList)