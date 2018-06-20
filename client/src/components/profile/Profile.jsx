import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  return (
    !user ? null :
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader>
              <strong>{user.name}</strong>
            </CardHeader>
            <img src={user.picture} width="100px" alt="" />
            <hr />
            <CardBody>
              <CardTitle>Events organized</CardTitle>
            </CardBody>
            {user.events && !!user.events &&
              user.events
                .map(e => (<Card key={e._id}>
                  <CardBody>
                    <CardTitle><Link to={'/events/' + e._id}>{e.title}</Link></CardTitle>
                    <CardSubtitle>{e.date}</CardSubtitle>
                    <CardText>{e.description}</CardText>
                  </CardBody>
                </Card>))}
          </Card>
        </Col>
      </Row>
  );
}

export default Profile;