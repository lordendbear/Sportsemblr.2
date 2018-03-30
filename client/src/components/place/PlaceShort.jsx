import React from 'react';
import PropTypes from 'prop-types';

const PlaceShort = ({ place }) => {
    return (
        <div className="well">
            <h2 className="media-heading">
                {place.title}
            </h2>
        </div>
    );
};

PlaceShort.propTypes = {
    place: PropTypes.object
}

export default PlaceShort;