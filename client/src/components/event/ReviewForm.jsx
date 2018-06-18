import React from 'react';
import { Button, FormGroup, Input, Form, Col, Label, Row, Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

export class ReviewForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    const review = { score: 0, text: '' };
    this.state = {
      review
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(value, property) {
    let review = Object.assign({}, this.state.review);
    review[property] = value;

    this.setState({ review });
  }

  render() {
    return (
      <div>
        {this.props.reviews && this.props.reviews.length &&
          this.props.reviews
            .map(r => (<Card key={r._id}>
              <CardBody>
                <CardTitle><Link to={'/users/' + r.user._id}>{r.user.name}</Link></CardTitle>
                <CardText>{r.text}</CardText>
                <CardText>{r.score}</CardText>
              </CardBody>
            </Card>))}

        {this.props.canLeaveReview && <Form onSubmit={(e) => { e.preventDefault() }}>
          <FormGroup>
            <Row>
              <Col md="4">
                <Label>Points</Label>
                <Input onChange={(e) => this.onInputChange(e.target.value, 'score')}
                  value={this.state.review.score} type="number" />
              </Col>
              <Col md="8">
                <Label>Text</Label>
                <Input onChange={(e) => this.onInputChange(e.target.value, 'text')}
                  value={this.state.review.text} type="text" />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Button type="submit" size="xl" color="primary" onClick={() => this.props.leaveReview(this.state.review)}><i className="fa fa-dot-circle-o"></i> Review</Button>
          </FormGroup>
        </Form>}
      </div>)
  }
}

export default ReviewForm;