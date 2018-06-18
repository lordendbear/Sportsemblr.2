import React from 'react'
import PropTypes from 'prop-types'
import PlaceShort from './PlaceShort';

const renderNoEventsMessage = () => <span> No sport places added yet...</span>

const PlacesList = ({ places }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading clearfix">
                {!places ? renderNoEventsMessage() :
                    places.map(place =>
                        <PlaceShort
                            key={place._id}
                            place={place}
                        />
                    )}
            </div>
        </div>
    )
}

PlacesList.propTypes = {
    places: PropTypes.array,
}

PlacesList.defaultPropTypes = {
    places: null,
}

export default PlacesList;