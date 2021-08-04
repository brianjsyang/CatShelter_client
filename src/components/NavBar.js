import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;


function NavBar() {
    return(
        <Styles>
            <Navbar animation="false" expand="lg">
                <Navbar.Brand href="/">Cat Adoption Shelter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            
                            <Nav.Link href="/add">Add Cat</Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            
                            <Nav.Link href="/about">About</Nav.Link>
                            
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles >
    );
}

export default NavBar;