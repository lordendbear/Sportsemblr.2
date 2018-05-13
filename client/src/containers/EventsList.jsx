import React from 'react'
import { connect } from 'react-redux'
import EventsList from '../components/event/EventsList';
import EditEventModal from '../components/event/EditEventModal';
import { bindActionCreators } from 'redux';
import * as eventActions from '../actions/eventActions';

class EventsListContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isOpen: false, event: Object.assign({}, props.event) };

        this.toggleModal = this.toggleModal.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.getEvent(id);
        }
    }

    render() {
        return (
            <div>
                <EventsList events={this.props.events} onNewEventClick={this.toggleModal} ></EventsList>
                {this.state.isOpen && <EditEventModal closeModal={this.toggleModal} event={this.state.event} saveEvent={this.saveEvent}></EditEventModal>}
            </div>
        );
    }

    saveEvent(event) {
        this.props.saveEvent(event)
            .then(response => {
                console.log(response);
            });
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen });
    }
}

const mapStateToProps = state => {
    return {
        event: state.event || { title: '' },
        events: state.events
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvent: bindActionCreators(eventActions.saveEvent, dispatch)
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsListContainer)