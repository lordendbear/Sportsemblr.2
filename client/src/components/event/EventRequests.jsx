import React from 'react'
import {
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button
} from 'reactstrap';

const EventRequests = ({ requests, accept, decline }) => {
  return !requests ? null : (
    < div className="animated fadeIn" >
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Person</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map(request =>
                    <tr key={request._id}>
                      <td>{request.sender.name}</td>
                      <td>
                        <Button color="primary" size="sm" onClick={accept}>Accept</Button>
                        <Button color="primary" size="sm" onClick={decline}>Decline</Button>
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