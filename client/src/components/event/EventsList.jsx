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

const renderNoEventsMessage = () => <span>No events right now</span>

const EventsList = ({ events, onNewEventClick }) => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> All Events

               <Button color="primary" size="sm" className="float-right" onClick={onNewEventClick}>New</Button>
            </CardHeader>
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>When</th>
                    <th>Organizer</th>
                    <th>People</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    !events ?
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
  events: PropTypes.array.isRequired,
}

export default EventsList;