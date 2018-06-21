import React from 'react';

import {
  Alert,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge
} from 'reactstrap';

import { Link } from 'react-router-dom';

const getDateText = (date) => {
  return new Date(date).toLocaleString('bg-BG');
}

const isActive = (event) => {
  let date =event.date;
  date = new Date(date);

  return date > new Date();
}

const Profile = ({ user }) => {
  return (
    !user ? null :
      <Row>
        <Col xs="12" md="12">
            <strong><em><h2 className="heading-profile">Hi, {user.name}</h2></em></strong>
            <hr />
            <strong><em><h5 className="heading-profile">Events you organized</h5></em></strong>            {user.events && !!user.events &&
              user.events
                .map(e => (<Card key={e._id}>
                  <CardBody>
                    <CardTitle>
                      <Link to={'/events/' + e._id}>{e.title}</Link>
                    </CardTitle>
                    <CardSubtitle>{getDateText(e.date)}</CardSubtitle>
                    <CardText><Badge color={isActive(e) ? 'success' : 'danger'}>{isActive ? 'Active' : 'Inactive'}</Badge></CardText>
                    <CardText>{e.description}</CardText>
                  </CardBody>
                </Card>))}
        </Col>
      </Row>
  );
}

export default Profile;