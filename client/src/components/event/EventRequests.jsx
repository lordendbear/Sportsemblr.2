import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button
} from 'reactstrap';

const renderNoRequestsMessage = () => <div className="empty-message "> No pending requests for your event</div>;

const EventRequests = ({ requests, respond }) => {
  return !requests ? null : (
    < div className="animated fadeIn" >
      <Row>
        <Col xs="12" lg="12">
          <Card>

            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Requests</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {requests.length === 0 && renderNoRequestsMessage()}
                  {requests && requests.map(request =>
                    <tr key={request._id}>
                      <td>{request.sender.name}</td>
                      <td>
                        <Button color="primary" size="sm" onClick={() => respond(true, request)}>Accept</Button>
                        <Button color="primary" size="sm" onClick={() => respond(false, request)}>Decline</Button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div >
  )
}

export default EventRequests;