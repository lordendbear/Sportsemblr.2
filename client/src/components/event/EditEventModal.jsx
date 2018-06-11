import React from 'react';
import Modal from 'react-bootstrap4-modal';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { Button, FormGroup, Input, Form, Col, Label, FormFeedback, UncontrolledButtonDropdown } from 'reactstrap';
import { Redirect } from "react-router-dom";

const EditEventModal = ({ isAuthenticated, event, closeModal, onInputChange, handleBlur, shouldMarkError, isSaveDisabled, saveEvent }) => {  
  return !isAuthenticated ? 
    <Redirect to={{ pathname: '/login' }} /> :
    (<Modal visible={true} onClickBackdrop={closeModal} dialogClassName="modal-lg">
        <Form onSubmit={ev => ev.preventDefault()}>
          <FormGroup>
            <FormGroup row>
              <Col md="6">
                <Label>Title</Label>
                <Input onChange={(e) => onInputChange(e.target.value, 'title')}
                  valid={!shouldMarkError('title')}
                  onBlur={handleBlur('title')}
                  value={event.title} type="text" />
                  <FormFeedback>Title should be at least 3 characters long</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="4">
                <Label>People needed</Label>
                <Input onChange={(e) => onInputChange(e.target.value, 'peopleNeeded')}
                  value={event.peopleNeeded} type="number" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label>Description</Label>
                <Input onChange={(e) => onInputChange(e.target.value, 'description')}
                  valid={!shouldMarkError('description')}
                  onBlur={handleBlur('description')}
                  value={event.description} type="textarea" />
                  <FormFeedback>Title should be at least 20 characters long</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label>Difficulty</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    beginner
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    advanced
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    semi-pro
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    pro
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="6">
                <Label>Sport</Label>
                <Input type="select" onChange={(e) => onInputChange(e.target.value, 'sport')}
                  value={event.sport}>
                  <option>Select</option>
                  <option>Football</option>
                  <option>Basketball</option>
                  <option>Voleyball</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label>Date</Label>
                <DatePicker
                  onChange={(date) => onInputChange(date, 'date')}
                  value={event.date}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label>Time</Label>
                <TimePicker
                  onChange={(time) => onInputChange(time, 'time')}
                  value={event.time}
                />
              </Col>
            </FormGroup>            
          </FormGroup>

          <FormGroup>
            <Button disabled={isSaveDisabled} type="submit" size="xl" color="primary" onClick={saveEvent}><i className="fa fa-dot-circle-o"></i> Save</Button>
            <Button size="xl" color="primary" className="float-right" onClick={closeModal}><i className="fa fa-dot-circle-o"></i> Close</Button>
          </FormGroup>
        </Form>
      </Modal >);
}

export default EditEventModal;