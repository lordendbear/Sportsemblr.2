import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    renderNavLink = (label, to) => (<NavLink to={to} exact activeClassName="selected" >
        {label}
    </NavLink>);

    render() {
        return (<nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>{this.renderNavLink('Home', '/')}</li>
                        <li>{this.renderNavLink('Login', '/login')}</li>
                        <li>{this.renderNavLink('Register', '/register')}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    }
}

export default Navbar;