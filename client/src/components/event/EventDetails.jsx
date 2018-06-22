import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Progress, Card, Badge } from 'reactstrap';
import MapComponent from '../common/MapComponent';

const renderFree = () => <span className="badge badge-success">FREE</span>
const renderPrice = (price) => <span><em>{`${price}$`}</em></span>
const renderProgressBar = (peopleJoined, peopleNeeded) => {
    let percentage = (peopleJoined / peopleNeeded) * 100;
    if(percentage === 0) {
        percentage = 1;
    }

    const color = percentage > 70 ? 'danger' : 'success';

    return peopleNeeded === 0 ?  <Progress value={100} color="danger" /> : <Progress value={percentage} color={color} />;
}

const renderMap = (location) => <MapComponent isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px`, width: '500px' }} />}
    mapElement={<div style={{ height: `100%` }} />}
    markerPosition={location}
    markerDraggeble={false}
    markerClickable={false} />

const isInactive = (event) => {
    let date =event.date;
    date = new Date(date);

    return date < new Date();
}

const EventDetails = ({ event }) => {
    if (!event) {
        return <div>Loading...</div>
    }

    let date = new Date(event.date);
    date = date.toLocaleString('bg-BG');

    const dateText = date.split(',')[0],
        hourText = date.split(',')[1];

    let duration, hours, mins;
    if(event.duration) {
        duration = event.duration.toString().split('.');
        [hours] = duration;
        mins = duration[1] ? (duration[1] * 60) / 100 : 0
    }

    const durationText = !duration ? 'n/a' : 
        mins ? `${hours} h ${mins} min` 
            : `${hours} h`;

    return <Card className="event-details-wrapper">
        {/* Left */}
        <Row>
        <Col md="6">
            <Row>
                <Col><h2>{event.title}</h2></Col>
                {
                    <Col><h2>{isInactive(event) && <Badge color='danger'>This event has passed</Badge>}</h2></Col>
                }
            </Row>
            <div className="progressbar-wrapper">
                <Row>
                    <Col md="7" className="text-center">
                        <span className="progress-text">{event.peopleNeeded > 0 ? `${event.peopleJoined.length} / ${event.peopleNeeded}` : <Badge color='danger'>FULL EVENT</Badge>}</span>
                    </Col>
                </Row>
                <Row>
                    <Col md="7">
                        {renderProgressBar(event.peopleJoined.length, event.peopleNeeded)}
                    </Col>
                </Row>
            </div>
            <hr/>
            <Row>
                <Col>Hey, I'm searching friends for <strong><em>{event.sport}</em></strong> for <strong><em>{event.difficulty}</em></strong>`s</Col>
            </Row> 
            <Row>
                <div className="speech-bubble">
                    {event.description}
                </div>
            </Row>
            <hr/>
            <Row>
                <Col md="12">
                    <div className="event-single-info-wrapper">
                        <i className="fa fa-calendar fa-2x event-info-icon" area-hidden="true"></i> <span className="event-single-info"> {dateText} </span>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col md="12">
                    <div className="event-single-info-wrapper">
                        <i className="fa fa-clock-o fa-2x event-info-icon" aria-hidden="true"></i> <span className="event-single-info"> {hourText} </span>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col><div className="event-single-info-wrapper"><i className="fa fa-hourglass-start fa-2x event-info-icon" aria-hidden="true"></i> <span className="event-single-info"> {durationText} </span></div></Col>
            </Row>
            <hr/> 
            <Row>
                <Col><div className="event-single-info-wrapper"><i className="fa fa-credit-card-alt fa-2x event-info-icon" aria-hidden="true"></i> <span className="event-single-info">{event.totalPrice === 0 ? renderFree() : renderPrice(event.totalPrice)}</span></div></Col>
            </Row>
        </Col>

        {/* Right */}
        <Col md="6">
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h5>Location: </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span><i className="fa fa-map-marker " aria-hidden="true"></i> {event.address ? event.address : 'No address specified'}</span>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row>
                <Col>{event.location && renderMap(event.location)}</Col>
            </Row>
        </Col>
        <Row>
            <Col>
            </Col>
        </Row>
        </Row>
    </Card>;
};

EventDetails.propTypes = {
    event: PropTypes.object
}

export default EventDetails;