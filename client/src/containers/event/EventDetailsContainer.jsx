import React from 'react';
import { connect } from 'react-redux'
import EventDetails from '../../components/event/EventDetails';
import EventRequests from '../../components/event/EventRequests';
import * as eventActions from '../../actions/eventActions';
import EditEventModal from '../../components/event/EditEventModal';
import { Button } from 'reactstrap';
import ReviewForm from '../../components/event/ReviewForm';
import EventChat from '../../components/event/EventChat';
import socketIOClient from 'socket.io-client'

export class EventDetailsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        const state = {
            isOpen: false,
            event: Object.assign({}, props.event),
            canJoin: props.canJoin,
            isOrganizer: props.isOrganizer,
            ifCanLeaveReview: props.ifCanLeaveReview,
            hasJoined: props.hasJoined,
            messages: props.messages,
            touched: {
                title: false,
                description: false
            }
        };

        if (props.user) {
            const socket = socketIOClient(window.location.origin);
            socket.on('chat message', (message) => {
                if (message) {
                    const messages = Object.assign([], this.state.messages);
                    messages.push(message);

                    this.setState({ messages });
                }
            });

            state.socket = socket;
        }

        this.state = state;

        this.toggleModal = this.toggleModal.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.join = this.join.bind(this);
        this.leaveReview = this.leaveReview.bind(this);
        this.respondToRequest = this.respondToRequest.bind(this);
        this.delete = this.delete.bind(this);
        this.writeMessage = this.writeMessage.bind(this);
        this.shouldMarkError = this.shouldMarkError.bind(this);
        this.validate = this.validate.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
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
                hasJoined: nextProps.hasJoined,
                messages: nextProps.messages,
                ifCanLeaveReview: nextProps.ifCanLeaveReview
            });

            if (!nextProps.messages && this.props.user) {
                this.props.getEventMessages(nextProps.event);
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.canJoin && !this.state.isOrganizer && <Button className="create-event-btn" onClick={this.join}>Join</Button>}
                {(this.state.isOrganizer || this.props.isAdmin) &&
                    <span className="float-right">
                        <Button className="create-event-btn edit" onClick={this.toggleModal}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                        <Button className="create-event-btn delete" onClick={this.delete}><i className="fa fa-trash" aria-hidden="true"></i></Button>
                    </span>
                }

                <EventDetails event={this.props.event}></EventDetails>
                <hr />
                {this.state.isOrganizer && this.checkIsActive() && <EventRequests requests={this.state.event.requests} respond={this.respondToRequest}></EventRequests>}
                <hr />
                {this.state.isOpen && <EditEventModal validate={this.validate} handleBlur={this.handleBlur} shouldMarkError={this.shouldMarkError} isAuthenticated={!!this.props.user} closeModal={this.toggleModal} event={this.state.event} onInputChange={this.inputChange} saveEvent={this.saveEvent}></EditEventModal>}
                {(this.state.hasJoined || this.state.isOrganizer) && <EventChat isActive={this.checkIsActive()} canDelete={this.state.isOrganizer} writeMessage={this.writeMessage} messages={this.state.messages} deleteMessage={this.deleteMessage}></EventChat>}
                <hr />

                {this.props.event && !this.checkIsActive() && <ReviewForm leaveReview={this.leaveReview} canLeaveReview={this.state.ifCanLeaveReview} reviews={this.props.event.reviews}> </ReviewForm>}
            </div>
        );
    }

    deleteMessage(message) {
        this.props.deleteEventMessage(this.props.event, message);
    }

    checkIsActive = () => {
        let date = this.props.event.date;
        date = new Date(date);

        return date > new Date();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    validate(event) {
        return {
            title: event.title.length < 3,
            description: event.description.length < 20
        }
    }

    shouldMarkError(field) {
        const errors = this.validate(this.state.event);

        const hasError = errors[field];
        const shouldShow = this.state.touched[field];

        return hasError ? shouldShow : false;
    }

    writeMessage(message) {
        if (message.content) {
            message.room = this.state.event._id;
            message.user = this.props.user._id;
            message.time = new Date();
            this.state.socket.emit('chat message', message);
        }
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

        const fullEvent = event.peopleJoined && event.peopleJoined.length === event.peopleNeeded;

        return !hasJoined && !hasRequested && !fullEvent;
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

        result = !event.reviews.find(r => r.user._id === user._id);
    }

    return result;
}

const checkIfHasJoined = (event, user) => {
    return !!event && !!event.peopleJoined.find(u => u._id === user._id);
}

const mapStateToProps = (state, ownProps) => {
    const event = state.events.event;
    const user = state.auth.user;
    const messages = state.message.messages;
    const result = {};

    if (user) {
        result.canJoin = checkIfCanJoin(event, user);
        result.hasJoined = checkIfHasJoined(event, user);
        result.isOrganizer = checkIfIsOrganizer(event, user);
        result.ifCanLeaveReview = checkIfCanLeaveReview(event, user);
        result.isAdmin = user.role === 'admin';
    }

    result.event = event;
    result.user = user;
    result.messages = messages;

    return result;
}

export default connect(mapStateToProps, {
    getEvent: eventActions.getEventById,
    saveEvent: eventActions.saveEvent,
    joinEvent: eventActions.joinEvent,
    respondToRequest: eventActions.respondToRequest,
    leaveReview: eventActions.leaveReview,
    deleteEvent: eventActions.deleteEvent,
    getEventMessages: eventActions.getEventMessages,
    deleteEventMessage: eventActions.deleteEventMessage
})(EventDetailsContainer)
