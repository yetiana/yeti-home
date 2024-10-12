import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact to="/" activeClassName="active-link" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link" className="nav-link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active-link" className="nav-link">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link" className="nav-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
