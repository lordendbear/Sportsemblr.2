import React from 'react';

// import { Radar } from 'react-chartjs-2';

import {
  Row,
  Col,
  Card,
  CardHeader,
} from 'reactstrap';

// const radar = {
//   labels: ['Football', 'Volleyball', 'Tennis', 'Basketball', 'Squash', 'Cycling'],
//   datasets: [
//     {
//       label: 'Last month',
//       backgroundColor: 'rgba(179,181,198,0.2)',
//       borderColor: 'rgba(179,181,198,1)',
//       pointBackgroundColor: 'rgba(179,181,198,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(179,181,198,1)',
//       data: [7, 1, 3, 1, 2, 5]
//     },
//     {
//       label: 'This month',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       pointBackgroundColor: 'rgba(255,99,132,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(255,99,132,1)',
//       data: [5, 1, 3, 1, 0, 6]
//     }
//   ]
// };

const Profile = ({ user }) => {
  return (
    !user ? null :
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader>
              <strong>{user.name}</strong>
            </CardHeader>
            {/* <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Enter name" />
                    <FormText color="muted">Your name</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="text-input" name="text-input" placeholder="Enter name" />
                    <FormText color="muted">Enter valid email</FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Notes about you</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                      placeholder="Describe the event" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label>How sporty are you?</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="radio1">Beginner</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="radio2">Advanced</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                      <Label check className="form-check-label" htmlFor="radio3">Feel like a PRO</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="multiple-select">Sports you are interested in</Label>
                  </Col>
                  <Col md="9">
                    <Input type="select" name="multiple-select" id="multiple-select" multiple>
                      <option value="1">Football</option>
                      <option value="2">Basketball</option>
                      <option value="3">Tennis</option>
                      <option value="4">Volleyball</option>
                      <option value="5">Cricket</option>
                      <option value="6">Table Tennis</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="file-input">Avatar</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input" />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody> */}
            {/* <CardFooter>
              <Button type="submit" size="xl" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
            </CardFooter> */}
          </Card>
          {/* <Card>
            <CardHeader>
              Your sports on a chart
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Radar data={radar} />
              </div>
            </CardBody>
          </Card> */}
        </Col>
      </Row>
  );
}

export default Profile;