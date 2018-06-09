import React from 'react';
import { connect } from 'react-redux'
import EventDetails from '../../components/event/EventDetails';
import EventRequests from '../../components/event/EventRequests';
import * as eventActions from '../../actions/eventActions';
import EditEventModal from '../../components/event/EditEventModal';
import { Button } from 'reactstrap';
import ReviewForm from '../../components/event/ReviewForm';
import { Redirect } from 'react-router-dom';

export class EventDetailsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isOpen: false,
            event: Object.assign({}, props.event),
            canJoin: props.canJoin,
            isOrganizer: props.isOrganizer,
            ifCanLeaveReview: props.ifCanLeaveReview
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.join = this.join.bind(this);
        this.leaveReview = this.leaveReview.bind(this);
        this.respondToRequest = this.respondToRequest.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this.props.getEvent(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps, ownProps) {
        if (!ownProps.event && nextProps.event) {
            this.setState({
                event: nextProps.event,
                canJoin: nextProps.canJoin,
                isOrganizer: nextProps.isOrganizer,
                ifCanLeaveReview: nextProps.ifCanLeaveReview
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.canJoin && !this.state.isOrganizer && <Button color="primary" size="sm" onClick={this.join}>Join</Button>}
                {this.state.isOrganizer &&
                    <span className="float-right">
                        <Button color="primary" size="sm" onClick={this.toggleModal}>Edit</Button>
                        <Button color="warning" size="sm" onClick={this.delete}>Delete</Button>
                    </span>
                }

                <EventDetails event={this.props.event}></EventDetails>
                <hr />
                {this.state.isOrganizer && < EventRequests requests={this.state.event.requests} respond={this.respondToRequest}></EventRequests>}
                <hr />
                {this.state.isOpen && <EditEventModal isAuthenticated={!!this.props.user} closeModal={this.toggleModal} event={this.state.event} onInputChange={this.inputChange} saveEvent={this.saveEvent}></EditEventModal>}
                <hr />
                {this.state.ifCanLeaveReview && <ReviewForm leaveReview={this.leaveReview}></ReviewForm>}
            </div>
        );
    }

    delete() {
        this.props.deleteEvent(this.state.event)
            .then(() => {
                this.props.history.push("/events")
            });
    }

    leaveReview(review) {
        this.props.leaveReview(review, this.state.event);
    }

    join() {
        this.props.joinEvent(this.state.event, this.props.user);
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

    respondToRequest(accept, request) {
        this.props.respondToRequest(this.state.event, request, accept);
    }
}

const checkIfCanJoin = (event, user) => {
    if (user && event) {
        const hasRequested = !!event.requests.find(r => r.sender === user._id);

        const hasJoined = !!event.peopleJoined.find(u => u._id === user._id);

        return !hasJoined && !hasRequested;
    }

    return false;
}

const checkIfIsOrganizer = (event, user) => {
    if (user && event) {
        return user._id === event.organizer;
    }

    return false;
}

const checkIfCanLeaveReview = (event, user) => {
    let result = false;

    if (event) {
        const date = new Date(event.date);

        result = date < new Date();
        if (!result) {
            return result;
        }

        result = !!event.reviews.find(r => r.user === user._id);
    }

    return result;
}

const mapStateToProps = (state, ownProps) => {
    const event = state.events.event;
    const user = state.auth.user;

    const result = {};

    if (user) {
        result.canJoin = checkIfCanJoin(event, user);
        result.isOrganizer = checkIfIsOrganizer(event, user);
        result.ifCanLeaveReview = checkIfCanLeaveReview(event, user);
    }

    result.event = event;
    result.user = user;

    return result;
}

export default connect(mapStateToProps, {
    getEvent: eventActions.getEventById,
    saveEvent: eventActions.saveEvent,
    joinEvent: eventActions.joinEvent,
    respondToRequest: eventActions.respondToRequest,
    leaveReview: eventActions.leaveReview,
    deleteEvent: eventActions.deleteEvent
})(EventDetailsContainer)