import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import avatar from '../../img/avatars/1.jpg';
import { Link } from 'react-router-dom'

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      userEvents: this.props.userEvents,
      joinedEvents: this.props.joinedEvents,
      user: this.props.user
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userEvents: nextProps.userEvents,
      joinedEvents: nextProps.joinedEvents,
      user: nextProps.user
    });
  }

  componentDidMount() {
    this.props.loadEvents();
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getDateText(event) {
    let date = new Date(event.date);
    date = date.toLocaleString('bg-BG');

    return date.split(',')[0];
  }

  renderSingleEvent = (event) => [<div key={event._id} className="callout callout-warning m-0 py-3">
    <div><strong><Link className="aside-link" to={'/events/' + event._id}>{event.title}</Link></strong></div>
    <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; {this.getDateText(event)}</small>
    <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; {event.address || 'n/a'}</small>
  </div>,
  <hr key={event._createdAt} className="mx-3 my-0" />];

  renderUserEvents = (which, events) => (<div>
      <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
        <small><b>{which}</b></small>
      </div>
      <hr className="transparent mx-3 my-0" />
      {(events && events.length > 0) ? events.map(event => this.renderSingleEvent(event)) : <div className="text-center">...</div>}
    </div>);

  render() {
    return (
      <aside className="aside-menu">
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.renderUserEvents('You participate in', this.state.joinedEvents)}
            {this.renderUserEvents('Events you created', this.state.userEvents)}
          </TabPane>

          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">2:32 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Option 1</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" defaultChecked />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 2</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 3</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 4</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" defaultChecked />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>CPU Usage</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Memory Usage</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 2 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </aside>
    )
  }
}

export default Aside;
