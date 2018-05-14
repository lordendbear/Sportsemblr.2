import React from 'react';
import { connect } from 'react-redux'
import EventDetails from '../../components/event/EventDetails';
import * as eventActions from '../../actions/eventActions';
import { bindActionCreators } from 'redux';

export class EventDetailsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    }

    componentDidMount() {
        this.props.getEvent(this.props.match.params.id);
    }

    render() {
        return (
            <EventDetails event={this.props.event}></EventDetails>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        event: state.events.event
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvent: bindActionCreators(eventActions.getEventById, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetailsContainer)