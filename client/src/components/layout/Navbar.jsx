import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown.jsx';

class Navbar extends React.Component {
  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  renderNavLink = (label, to) => (<NavLink tag={Link} to={to}>
    {label}
  </NavLink>);

  render() {
    const isAuthenticated = this.props.isAuthenticated;

    return (
      <header className="app-header navbar">
        <Nav className="d-md-down-none" navbar>
          {isAuthenticated && <HeaderDropdown />}
          <NavItem className="px-3">
            {this.renderNavLink('Home', '/')}
          </NavItem>
          {!isAuthenticated &&
            <NavItem className="px-3">
              {this.renderNavLink('Login', '/login')}
            </NavItem>
          }
          {!isAuthenticated &&
            <NavItem className="px-3">
              {this.renderNavLink('Register', '/register')}
            </NavItem>
          }
          <NavItem className="px-3">
            {this.renderNavLink('Events', '/events')}
          </NavItem>
          <NavItem className="px-3">
            {this.renderNavLink('Places', '/places')}
          </NavItem>
          {this.props.isAdmin &&
            <NavItem className="px-3">
              {this.renderNavLink('Admin', '/admin')}
            </NavItem>
          }
        </Nav>
        {isAuthenticated &&
          <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
        }
      </header>);
  }
}

export default Navbar;