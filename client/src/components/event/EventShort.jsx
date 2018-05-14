import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {
    Badge
} from 'reactstrap';

const EventShortComponent = ({ event, isActive }) => {
    return (
        <tr>
            <td><Link to={'/events/' + event.id}>{event.title}</Link></td>
            <td>{event.date.toLocaleDateString("bg-BG")}</td>
            <td>{event.author}</td>
            <td>{event.peopleNeeded} / {event.totalPeople}</td>
            <td>
                <Badge color={isActive ? 'success' : 'danger'}>{isActive ? 'Active' : 'Inactive'}</Badge>
            </td>
        </tr>)
};

EventShortComponent.propTypes = {
    event: PropTypes.object
}

export default EventShortComponent;