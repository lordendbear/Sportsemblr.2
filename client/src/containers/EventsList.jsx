import { connect } from 'react-redux'
import EventsList from '../components/event/EventsList';

const mapStateToProps = state => {
    return {
        events: state.events
    };
}

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsList)