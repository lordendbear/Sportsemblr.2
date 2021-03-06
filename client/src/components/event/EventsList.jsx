import PropTypes from 'prop-types'
import React from 'react'
import LazyLoad from 'react-lazyload';
import EventShort from './EventShort';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button
} from 'reactstrap';
import Filters from './Filters';

const renderNoEventsMessage = () => <tr><td>No events right now</td></tr>
const isActive = (event) => {
  let date =event.date;
  date = new Date(date);

  return date > new Date();
}

// TODO: Should add filers and orders
const EventsList = ({ events, onNewEventClick, isModalOpen, isAuthenticated }) => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <Filters />
              {!isModalOpen && isAuthenticated && <Button className="create-event-btn" size="md" onClick={onNewEventClick}>NEW</Button>}
            </CardHeader>
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>What</th>
                    <th>When</th>
                    <th>Duration</th>
                    <th>Price / person</th>
                    <th>Location</th>
                    <th>People</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    !events || events.length === 0 ?
                      renderNoEventsMessage() :
                      events.map(event => {
                        return <LazyLoad key={event._id}
                          height={100}>
                          <EventShort
                            event={event}
                            isActive={isActive(event)} />
                        </LazyLoad>;
                      })
                  }
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

EventsList.propTypes = {
  events: PropTypes.array,
}

EventsList.defaultPropTypes = {
  events: null
}

export default EventsList;