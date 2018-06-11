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
            isAuthenticated: this.props.isLoggedIn(),
            markerPosition: { lat: -34.397, lng: 150.644 },

            touched: {
                title: false,
                description: false
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.shouldMarkError = this.shouldMarkError.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isAuthenticated: nextProps.isLoggedIn() });
    }

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const isSaveDisabled = this.isSaveDisabled();

        return (
            <div>
                <EventsList events={this.props.events} onNewEventClick={this.toggleModal} ></EventsList>
                {this.state.isOpen &&
                    <EditEventModal isAuthenticated={this.state.isAuthenticated}
                        closeModal={this.toggleModal}
                        event={this.state.event}
                        onInputChange={this.inputChange}
                        handleBlur={this.handleBlur}
                        saveEvent={this.saveEvent}
                        shouldMarkError={this.shouldMarkError}
                        isSaveDisabled={isSaveDisabled}
                        markerPosition={this.state.markerPosition}>
                    </EditEventModal>}
            </div>
        );
    }

    inputChange(value, property) {
        let event = Object.assign({}, this.state.event);

        if(property === 'location') {
            const location = {
                lat: value.latLng.lat(),
                lng: value.latLng.lng()
            }
            
            value = location;
        }

        event[property] = value;

        this.setState({ event });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
    }

    saveEvent() {
        const event = this.state.event;
        const time = event.time.split(':');

        event.date.setHours(time[0], time[1]);

        this.props.saveEvent(this.state.event)
            .then(res => {
                this.toggleModal();
            });
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    validate(event) {
        return {
            title: event.title.length < 3,
            description: event.description.length < 20
        }
    }

    isSaveDisabled() {
        const isSaveDisabled = Object.values(this.validate(this.state.event)).reduce((a, b) => a || b);

        return isSaveDisabled;
    }

    shouldMarkError(field) {
        const errors = this.validate(this.state.event);

        const hasError = errors[field];
        const shouldShow = this.state.touched[field];

        return hasError ? shouldShow : false;
    }
}

const emptyEvent = {
    title: '',
    peopleNeeded: 0,
    sport: '',
    description: '',
    difficulty: 'beginner',
    date: new Date(),
    time: '18:00',
    totalPrice: 0,
    location: {
        lat: 0,
        lng: 0
    }
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