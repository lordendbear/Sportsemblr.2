import React from 'react';
import Modal from 'react-bootstrap4-modal';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { Button, FormGroup, Input, Form, Col, Label, FormFeedback, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import MapSearchBox from '../common/MapSearchBox';
import { SPORTS_SUGGESTIONS as sports } from '../../util/constants';

// TODO: Add check if date & time is in the past. You can't add an event in the past
const EditEventModal = ({ isAuthenticated, event, closeModal, onInputChange, handleBlur, shouldMarkError, isSaveDisabled, saveEvent, markerPosition, onMarkerDragEnd}) => {
  return !isAuthenticated ? 
    <Redirect to={{ pathname: '/login' }} /> :
    (<Modal visible={true} onClickBackdrop={closeModal} dialogClassName="modal-lg">
        <Form onSubmit={ev => ev.preventDefault()}>
          <FormGroup>
            <FormGroup row>
              <Col md="6">
                <Label>Title</Label>
                <FormText color="muted"> E.g. "Football for amaterus" </FormText>
                <Input onChange={(e) => onInputChange(e.target.value, 'title')}
                  valid={!shouldMarkError('title')}
                  onBlur={handleBlur('title')}
                  value={event.title} type="text" />
                  <FormFeedback>Title should be at least 3 characters long</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="6">
                <Label>People needed</Label>
                <FormText color="muted"> How many people does this event need </FormText>
                <Input onChange={(e) => onInputChange(e.target.value, 'peopleNeeded')}
                  min="1"
                  max="100"
                  value={event.peopleNeeded} type="number" />
              </Col>
              <Col md="6">
                <Label>Price per person</Label>
                <FormText color="muted"> How much will the event cost? </FormText>
                <Input onChange={(e) => onInputChange(e.target.value, 'totalPrice')}
                  min="0"
                  max="10000"
                  value={event.totalPrice} type="number" step="0.1" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Label>Description</Label>
                <FormText color="muted"> Enter notes to the other players or anything you need to share for the event </FormText>
                <Input onChange={(e) => onInputChange(e.target.value, 'description')}
                  valid={!shouldMarkError('description')}
                  onBlur={handleBlur('description')}
                  value={event.description} type="textarea" />
                  <FormFeedback>Description should be at least 20 characters long</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Location</Label>
                <FormText color="muted"> Drag the marker to the location of the event </FormText>
                <MapSearchBox isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `300px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  markerPosition={markerPosition}
                  onInputChange={onInputChange}
                  markerClickable={true}
                  markerDraggable={true}
                />
              </Col>
            </FormGroup> 
            <FormGroup row>
              <Col md="6">
                <Label>Sport Type</Label>
                <FormText color="muted"> What are you playing </FormText>
                <Input type="select" onChange={(e) => onInputChange(e.target.value, 'sport')}
                  value={event.sport}>
                  {sports.map(sport => <option key={sport.id}>{sport.name}</option>)}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <FormText color="muted"> Date </FormText>
                <DatePicker
                  onChange={(date) => onInputChange(date, 'date')}
                  value={event.date}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <FormText color="muted"> Time </FormText>
                <TimePicker
                  onChange={(time) => onInputChange(time, 'time')}
                  value={event.time}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md="2">
                <Label>Duration</Label>
                <FormText color="muted"> In hours </FormText>
                <Input onChange={(e) => onInputChange(e.target.value, 'duration')}
                  min="0.25"
                  max="1000"
                  value={event.duration} type="number" step="0.25" />
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
          </FormGroup>

          <FormGroup>
            <Button disabled={isSaveDisabled} type="submit" size="xl" color="primary" onClick={saveEvent}><i className="fa fa-dot-circle-o"></i> Save</Button>
            <Button size="xl" color="primary" className="float-right" onClick={closeModal}><i className="fa fa-dot-circle-o"></i> Close</Button>
          </FormGroup>
        </Form>
      </Modal >);
}

export default EditEventModal;