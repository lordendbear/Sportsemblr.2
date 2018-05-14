import React from 'react';
import PropTypes from 'prop-types';

const EventDetails = ({ event }) => {
    if (event) {
        return (
            <div>
                {event.title}
            </div>
        );
    }

    return null;
};

EventDetails.propTypes = {
    event: PropTypes.object
}

export default EventDetails;