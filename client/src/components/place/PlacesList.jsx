import React from 'react'
import PropTypes from 'prop-types'
import PlaceShort from './PlaceShort';

const PlacesList = ({ places }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading clearfix">
                {places.map(place =>
                    <PlaceShort
                        key={place.id}
                        place={place}
                    />
                )}
            </div>
        </div>
    )
}

PlacesList.propTypes = {
    places: PropTypes.array.isRequired,
}

export default PlacesList;