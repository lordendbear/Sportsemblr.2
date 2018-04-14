import { connect } from 'react-redux'
import EventDetails from '../../components/event/EventDetails';

const getEventById = (events, id) => {
    const eventList = events.filter((e) => e.id === id);

    if (eventList.length) {
        return eventList[0];
    }

    return 'no';
};

const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.id;
    const event = getEventById(state.events, id);

    return {
        event
    };
}

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetails)