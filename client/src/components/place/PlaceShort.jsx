import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardHeader, CardBody, CardLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const PlaceShort = ({ place }) => {
    console.log(place);
    return (
        <Card className="well">
            <CardHeader>
                <CardTitle className="media-heading">
                    <Link to={'/place/' + place._id}>{place.name}</Link>
                </CardTitle>
                <CardLink>
                    <a href={place.page}>{place.page}</a>
                </CardLink>
                <CardText className="pull-right">
                    {place.sports.map(sport => <span id={sport._id}><em>{sport.name}, </em></span>)}
                </CardText>
            </CardHeader>
            <CardBody>
                <CardText>
                    {place.description}
                </CardText>
            </CardBody>
        </Card>
    );
};

PlaceShort.propTypes = {
    place: PropTypes.object
}

export default PlaceShort;