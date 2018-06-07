import React from 'react';
import { Button, FormGroup, Input, Form, Col, Label, Row } from 'reactstrap';

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
    return (this.state.review ?
      <Form onSubmit={(e) => { e.preventDefault() }}>
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
      </Form> : null)
  }
}

export default ReviewForm;