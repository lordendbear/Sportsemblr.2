import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/authActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  NavLink
} from 'reactstrap';
import avatar from '../../img/avatars/7.jpg';


class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      loggedOut: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logOut() {
    this.props.logOut();

    this.setState({ loggedOut: true });
  }

  dropAccnt() {
    if(this.state.loggedOut){
      return <Redirect to="/" />
    }

    return (
      <Dropdown className="right" nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
          <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
          <DropdownItem><i className="fa fa-user"></i>
            <NavLink tag={Link} to="/profile" exact> Profile </NavLink>
          </DropdownItem>
          <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
          <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
          <DropdownItem onClick={() => this.logOut()}><i className="fa fa-lock" ></i> Logout </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    //  const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logOut }, dispatch)
};

export default connect(null, mapDispatchToProps)(HeaderDropdown);