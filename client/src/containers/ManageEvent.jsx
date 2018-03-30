import React from 'react';
import { connect } from 'react-redux'
import EditEvent from '../components/event/EditEvent';
import { saveEvent } from '../actions/eventActions.js';
import { bindActionCreators } from 'redux';

export class ManageEvent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      event: Object.assign({}, this.props.event),
      errors: {},
      saving: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.event.id !== nextProps.event.id) {
      this.setState({ event: Object.assign({}, nextProps.event) });
    }
  }

  updateEventState(ev) {
    const field = ev.target.name;
    let event = Object.assign({}, this.state.event);
    event[field] = ev.target.value;
    return this.setState({ event });
  }

  formIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.event.title.length < 3) {
      errors.title = 'Name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });

    return formIsValid;
  }

  saveEvent(ev) {
    ev.preventDefault();

    if (!this.formIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.saveEvent(this.state.event)
  }

  render() {
    return (
      <EditEvent
        event={this.state.event}
        onChange={(e) => this.updateEventState(e)}
        onSave={(e) => this.saveEvent(e)}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

const getEventById = (events, id) => {
  const eventList = events.filter((e) => e.id === id);

  if (eventList.length) {
    return eventList[0];
  }

  return { title: '' };
};

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;

  const event = getEventById(state.events, id);
  return {
    event
  };
}

const mapDispatchToProps = dispatch => {
  return {
    saveEvent: bindActionCreators(saveEvent, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageEvent)