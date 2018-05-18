import React from 'react';
import { connect } from 'react-redux'
import EventDetails from '../../components/event/EventDetails';
import * as eventActions from '../../actions/eventActions';
import EditEventModal from '../../components/event/EditEventModal';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';

export class EventDetailsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isOpen: false,
            event: Object.assign({}, props.event),
            canJoin: props.canJoin
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.join = this.join.bind(this);
    }

    componentDidMount() {
        this.props.getEvent(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps, ownProps) {
        if (!ownProps.event && nextProps.event) {
            this.setState({ event: nextProps.event, canJoin: nextProps.canJoin });
        }
    }

    render() {
        return (
            <div>
                <Button color="primary" size="sm" className="float-right" onClick={this.toggleModal}>Edit</Button>
                <EventDetails event={this.props.event}></EventDetails>
                {this.state.isOpen && <EditEventModal closeModal={this.toggleModal} event={this.state.event} onInputChange={this.inputChange} saveEvent={this.saveEvent}></EditEventModal>}
            </div>
        );
    }

    inputChange(value, property) {
        let event = Object.assign({}, this.state.event);

        event[property] = value;

        this.setState({ event });
    }

    saveEvent() {
        this.props.saveEvent(this.state.event)
            .then(res => {
                this.toggleModal();
                this.props.getEvent(this.props.match.params.id);
            });
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen });
    }
}

const checkIfCanJoin = (event, user) => {
    if (user && event) {
        const hasJoined = !!user.events.find(e => e._id === event._id);

        return !hasJoined;
    }

    return false;
}

const mapStateToProps = (state, ownProps) => {
    const event = state.events.event;
    const user = state.auth.user;
    const canJoin = checkIfCanJoin(event, user);

    return {
        event,
        canJoin,
        user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEvent: bindActionCreators(eventActions.getEventById, dispatch),
        saveEvent: bindActionCreators(eventActions.saveEvent, dispatch),
        joinEvent: bindActionCreators(eventActions.joinEvent, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetailsContainer)