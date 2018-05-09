import React from 'react';
import PropTypes from 'prop-types';
import {
    Badge
  } from 'reactstrap';

const EventShortComponent = (props) => {
    const event = props.event;
    return (
        <tr>
            <td>{event.title}</td>
            <td>{event.date.toLocaleDateString("bg-BG")}</td>
            <td>{event.author}</td>
            <td>{event.peopleNeeded} / {event.totalPeople}</td>
            <td>
                <Badge color={props.isActive ? 'success' : 'danger'}>{props.isActive ? 'Active' : 'Inactive'}</Badge>
            </td>
        </tr>)
};

EventShortComponent.propTypes = {
    event: PropTypes.object
}

export default EventShortComponent;