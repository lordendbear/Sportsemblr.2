import React from 'react'
import PropTypes from 'prop-types'
import PlaceShort from './PlaceShort';

const renderNoEventsMessage = () => <tr><td>No sport places added yet... :/</td></tr>

const PlacesList = ({ places }) => {
    debugger;
    return (
        <div className="panel panel-default">
            <div className="panel-heading clearfix">
                {!places? renderNoEventsMessage() : 
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
    places: PropTypes.array.isRequired,
}

export default PlacesList;