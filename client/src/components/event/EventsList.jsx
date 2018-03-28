import React from 'react'
import PropTypes from 'prop-types'
import EventShort from './EventShort';

const EventsList = ({ events }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading clearfix">
                {events.map(event =>
                    <EventShort
                        key={event.id}
                        event={event}
                    />
                )}
            </div>
        </div>
    )
}

EventsList.propTypes = {
    events: PropTypes.array.isRequired,
}

export default EventsList;