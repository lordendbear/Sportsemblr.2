import React from 'react'
import PropTypes from 'prop-types'
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

// TODO: Should add filers and orders
const EventsList = ({ events, onNewEventClick }) => {
  debugger;
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
               <Filters />
               <Button color="primary" size="sm" className="float-right" onClick={onNewEventClick}>New</Button>
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
                      events.map(event =>
                        <EventShort
                          key={event._id}
                          event={event}
                          isActive={true}
                        />)
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