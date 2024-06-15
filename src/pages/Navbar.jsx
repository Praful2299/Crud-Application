import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function Navbaar() {
  return (  
    <div className='navy'>
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
    <Container fluid>
      <Navbar.Brand href="/"> <img src="./src/images/logo.png" height="25px" width="25px" alt="" /> Employee Management App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/"><IoHome /> Home</Nav.Link>
          <Nav.Link href="employee"><FaRegUser/> Employee</Nav.Link>
          <Nav.Link href="search"><FaSearch/> Search</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>

  )
}

export default Navbaar;