import React from 'react';
import PropTypes from 'prop-types';

const PlaceShortComponent = ({ place }) => {
    return (
        <div className="well">
            <h2 className="media-heading">
                {place.title}
            </h2>
        </div>
    );
};

PlaceShortComponent.propTypes = {
    place: PropTypes.object
}

export default PlaceShortComponent;