import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/Profile">
                            <Link to='/profile'><h3>Profile</h3></Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to='/home'><h3>Home</h3></Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                          USER_name  
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;