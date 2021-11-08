import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

import "./Navi.css"

export default class Navi extends(React.Component){

    render(){
        return <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">React-Day3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#login" onClick={()=> this.props.chgScr("login")}>Login</Nav.Link>
              <Nav.Link href="#register" onClick={()=> this.props.chgScr("register")}>Register</Nav.Link>
              <Nav.Link href="#gallery" onClick={()=> this.props.chgScr("gallery")}>Gallery</Nav.Link>
              <Nav.Link href="#todo" onClick={()=> this.props.chgScr("todo")}>Todo</Nav.Link>
              <Nav.Link href="#phoneBook" onClick={()=> this.props.chgScr("phoneBook")}>Phone Book</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    }
    
}