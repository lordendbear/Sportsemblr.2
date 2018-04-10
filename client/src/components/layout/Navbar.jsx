import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
  } from 'reactstrap';
class Navbar extends React.Component {
    asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
      
    renderNavLink = (label, to) => (<NavLink tag={Link} to={to} exact>
          {label}
      </NavLink>);

    render() {
        return(
         <header className="app-header navbar">
            <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            {this.renderNavLink('Home', '/')}
          </NavItem>
          <NavItem className="px-3">
            {this.renderNavLink('Login', '/login')}
          </NavItem>
          <NavItem className="px-3">
            {this.renderNavLink('Register', '/register')}
          </NavItem>
          <NavItem className="px-3">
            {this.renderNavLink('Events', '/events')}
          </NavItem>
        </Nav>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        </header>);
    }
}

export default Navbar;