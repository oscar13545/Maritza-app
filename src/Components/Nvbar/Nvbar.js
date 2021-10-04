import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Nvbar = (props) => {
    return (
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Chef Maritza</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="/platillo">Platillos </Nav.Link>
    <Nav.Link href="/menu">Menu</Nav.Link>
    <Nav.Link href="/tour360">Tour 360</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



        );
}

export default Nvbar;