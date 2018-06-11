import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {
    Badge
} from 'reactstrap';
import MapComponent from '../common/MapComponent';

const renderFree = () => <span className="badge badge-success">FREE</span>
const renderPrice = (price) => <span><strong><em>{`${price}$`}</em></strong></span>

// TODO: After X hours should be days, hours, minutes...
const EventShortComponent = ({ event, isActive }) => {
    let duration, hours, mins;
    if(event.duration) {
        duration = event.duration.toString().split('.');
        [hours] = duration;
        mins = (duration[1] * 60) / 100
    }

    return (
        <tr>
            <td><Link to={'/events/' + event._id}>{event.title}</Link></td>
            <td>{event.sport}</td>
            <td>
                {event.date.toLocaleString("bg-BG")}
                <br/>
                <strong><em>({Math.round(Math.abs(Date.now() - event.date) / 36e5)} h)</em></strong>
            </td>
            <td>{event.duration ? `${hours} h ${mins} min` : 'n/a'}</td>
            <td>{event.totalPrice === 0 ? renderFree() : renderPrice(event.totalPrice)}</td>
            <td>
                {
                    !event.location ? 
                        <span> 'No geolocation added' </span> :
                        <MapComponent isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `200px`, width: '300px' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            markerPosition={event.location}
                            markerDraggeble={false}
                            markerClickable={false}
                        />
                }
            </td>
            <td>{event.peopleJoined.length} / {event.peopleNeeded}</td>
            <td>
                <Badge color={isActive ? 'success' : 'danger'}>{isActive ? 'Active' : 'Inactive'}</Badge>
            </td>
        </tr>)
};

EventShortComponent.propTypes = {
    event: PropTypes.object
}

export default EventShortComponent;