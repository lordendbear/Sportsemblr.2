import React from 'react'
import PropTypes from 'prop-types'
import EventShort from './EventShort';
import {
    Badge,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
  } from 'reactstrap';
  
const EventsList = ({ events }) => {
    return (
        <div className="animated fadeIn">
        <Row>
        <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> All Events
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>When</th>
                    <th>Organizator</th>
                    <th>People</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {events.map(event =>
                    <EventShort
                        key={event.id}
                        event={event}
                        isActive={true}
                    />
                  )}
                  <tr>
                    <td>Mocked event</td>
                    <td>10.04.2018 г.</td>
                    <td>Ivan Ivanov</td>
                    <td>9 / 11</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Mocked event 2</td>
                    <td>10.04.2018 г.</td>
                    <td>Ivan Ivanov</td>
                    <td>9 / 11</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                </Pagination>
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