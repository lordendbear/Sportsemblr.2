import React from 'react';

import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

const EditEvent = ({ event, onSave, onChange, saving, errors }) => {
  return (
    <Row>
      <Col xs="12" md="12">
        <Card>
          <CardHeader>
            <strong>Create an event</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Event Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="text-input" placeholder="Enter name" />
                  <FormText color="muted">Enter something meaningful</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="password-input">Select date</Label>
                </Col>
                <Col xs="12" md="9">
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">Event notes</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                    placeholder="Describe the event" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">People needed</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Price per person</Label>
                </Col>
                <Col xs="9" md="2">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-euro"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" id="input3-group1" name="input3-group1" placeholder=".." />
                    <InputGroupAddon addonType="append">
                      <InputGroupText></InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Difficulty</Label>
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
                  <Label htmlFor="file-input">Add photo</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="file-input" name="file-input" />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="xl" color="primary"><i className="fa fa-dot-circle-o"></i> Create</Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}

export default EditEvent;