import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
class Navbar extends React.Component {
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
        </Nav>
        </header>);
    }
}

export default Navbar;