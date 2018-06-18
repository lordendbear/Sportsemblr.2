import React from 'react';
import { Button, FormGroup, Input, Form, Col, Label, Row, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

export class EventChat extends React.Component {
  constructor(props, context) {
    super(props, context);

    const message = { room: '', user: '', content: '', time: '' };
    this.state = {
      message
    };

    this.onContentChange = this.onContentChange.bind(this);
  }

  onContentChange(value) {
    let message = Object.assign({}, this.state.message);
    message.content = value;

    this.setState({ message });
  }

  sendMessage = () => {
    this.props.writeMessage(this.state.message);
    this.onContentChange('');
  }

  render() {
    return (
      <div>
        {this.props.messages && this.props.messages.length &&
          this.props.messages
            .map(m => (<Card key={m._id}>
              <CardBody>
                <CardTitle><Link to={'/users/' + m.user._id}>{m.user.name}</Link></CardTitle>
                <CardSubtitle>{m.time}</CardSubtitle>
                <CardText>{m.content}</CardText>
              </CardBody>
              {this.props.canDelete && <Button type="submit" size="s" color="danger" onClick={() => this.props.deleteMessage(m)}> Delete</Button>}
            </Card>))}

        {this.props.isActive && <Form onSubmit={(e) => { e.preventDefault() }}>
          <FormGroup>
            <Row>
              <Col md="8">
                <Label>Write</Label>
                <Input onChange={(e) => this.onContentChange(e.target.value)}
                  value={this.state.message.content} type="text" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Button type="submit" size="xl" color="primary" onClick={this.sendMessage}><i className="fa fa-dot-circle-o"></i> Submit</Button>
          </FormGroup>
        </Form>}
      </div>)
  }
}

export default EventChat;