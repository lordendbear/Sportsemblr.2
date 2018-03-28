import React from 'react';
import PropTypes from 'prop-types';

const EventShortComponent = (props) => {
    console.log(props);
    const event = props.event;
    return (
        <div className="well">
            <h2 className="media-heading">
                {event.title}
            </h2>
            {event.author}
            <ul className="list-inline list-unstyled">
                <li><span><i className="glyphicon glyphicon-calendar"></i>{event.date.toLocaleDateString("bg-BG")}</span></li>
                <li>|</li>
                <li> <span><i className="glyphicon glyphicon-comment"></i> {event.peopleNeeded} / {event.totalPeople}</span></li>
                <li>|</li>
                <li>
                    <span className="glyphicon glyphicon-star"></span> Rating: @Model.Votes
        </li>
            </ul>
        </div>
    )

};

EventShortComponent.propTypes = {
    event: PropTypes.object
}

export default EventShortComponent;