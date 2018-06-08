import React from 'react'
import { connect } from 'react-redux'
import EventsList from '../components/event/EventsList';
import EditEventModal from '../components/event/EditEventModal';
import * as eventActions from '../actions/eventActions';
import { isLoggedIn } from '../actions/authActions';

class EventsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { 
            isOpen: false,
            event: Object.assign({}, props.event),
            isAuthenticated: this.props.isLoggedIn()
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isAuthenticated: nextProps.isLoggedIn() });
    }

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        return (
            <div>
                <EventsList events={this.props.events} onNewEventClick={this.toggleModal} ></EventsList>
                {this.state.isOpen && <EditEventModal isAuthenticated={this.state.isAuthenticated} closeModal={this.toggleModal} event={this.state.event} onInputChange={this.inputChange} saveEvent={this.saveEvent}></EditEventModal>}
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
            });
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen });
    }
}

const emptyEvent = {
    title: '',
    peopleNeeded: 0,
    sport: '',
    description: '',
    difficulty: 'beginner',
    date: new Date(),
    totalPrice: 0
};

const mapStateToProps = state => {
    return {
        event: Object.assign({}, emptyEvent),
        events: state.events.events
    };
}

export default connect(mapStateToProps, {
    saveEvent: eventActions.saveEvent,
    getEvents: eventActions.loadEvents,
    isLoggedIn
})(EventsContainer)