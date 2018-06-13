import React from 'react';
import ActiveFilter from '../../containers/ActiveFilter';
import GenericInputFilter from '../../containers/GenericInputFilter';
import { VisibilityFilters } from '../../actions/eventActions';
import { SPORTS_SUGGESTIONS as sports } from '../../util/constants';
import { InputGroup, InputGroupAddon, Row, Col, FormText } from 'reactstrap';

const Filters = () => (
  <div>
    <Row>
        <Col md="3">
            <ActiveFilter filter={VisibilityFilters.SHOW_ALL} color="primary">
                All
            </ActiveFilter>
            <ActiveFilter filter={VisibilityFilters.SHOW_ACTIVE} color="success">
                Active
            </ActiveFilter>
            <ActiveFilter filter={VisibilityFilters.SHOW_INACTIVE} color="danger">
                Inactive
            </ActiveFilter>
        </Col>
        <Col md="9">
            <ActiveFilter filter={VisibilityFilters.SHOW_FREE_EVENTS} color="warning" className="pull-right">
                SHOW FREE EVENTS
            </ActiveFilter>
        </Col>    
    </Row>
    <Row>
        <Col md="2">
            <FormText color="muted">From: </FormText>
            <InputGroup>
                <GenericInputFilter filter={VisibilityFilters.MIN_PRICE_FILTER} type="number" step="0.5" placeholder="Min price" />
                <InputGroupAddon addonType="append">$</InputGroupAddon>
            </InputGroup>
        </Col>
        <Col md="2">
            <FormText color="muted">To: </FormText>
            <InputGroup>
                <GenericInputFilter filter={VisibilityFilters.MAX_PRICE_FILTER} type="number" step="0.5" placeholder="Max price" />
                <InputGroupAddon addonType="append">$</InputGroupAddon>
            </InputGroup>
        </Col>
        <Col md="2">
            <FormText color="muted">Sport Type: </FormText>
            <GenericInputFilter filter={VisibilityFilters.SPORT_TYPE_FILTER} type="select">
                {sports.map(s => <option id={s.id}>{s.name}</option>)}
            </GenericInputFilter>
        </Col>
    </Row>
  </div>
)

export default Filters;
