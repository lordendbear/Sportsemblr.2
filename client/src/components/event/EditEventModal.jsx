import React from 'react';
import Modal from 'react-bootstrap4-modal';
import { Button, FormGroup, Input, Form, Col, Label, Row } from 'reactstrap';

const EditEventModal = ({ event, closeModal, onInputChange, saveEvent }) => {
  return (
    <Modal visible={true} onClickBackdrop={closeModal} dialogClassName="modal-lg">
      <Form onSubmit={ev => ev.preventDefault()}>
        <FormGroup>
          <Row>
            <Col md="8">
              <Label>Title</Label>
              <Input onChange={(e) => onInputChange(e.target.value, 'title')}
                value={event.title} type="text" />
            </Col>
            <Col md="4">
              <Label>People needed</Label>
              <Input onChange={(e) => onInputChange(e.target.value)}
                value={event.peopleNeeded} type="number" />
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Button type="submit" size="xl" color="primary" onClick={() => saveEvent(event)}><i className="fa fa-dot-circle-o"></i> Save</Button>

          <Button size="xl" color="primary" className="float-right" onClick={closeModal}><i className="fa fa-dot-circle-o"></i> Close</Button>
        </FormGroup>
      </Form>
    </Modal>
  );
}

export default EditEventModal;