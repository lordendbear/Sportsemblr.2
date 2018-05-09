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
  Dropdown
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
    if (this.state.loggedOut) {
      return <Redirect to="/" />
    }

    return (
      <Dropdown className="right" nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Activities</strong></DropdownItem>
          <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-bell-o"></i> Events<Badge color="info">42</Badge></DropdownItem>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem tag={Link} to="/profile"><i className="fa fa-user"></i>Profile</DropdownItem>
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