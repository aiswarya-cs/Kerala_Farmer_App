import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./Secondnav.css"

const Headertwo = () => {
  return (
    <div>
      <Navbar expand="lg" className="second-navbar ms-auto me-auto">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '150px'}}
            navbarScroll
          >
             <Nav className="ms-auto me-5">
            <Nav.Link className='li-elements' href="#home">Home</Nav.Link>
            <Nav.Link className='li-elements' href="#features">Register</Nav.Link>
            <Nav.Link className='li-elements' href="#pricing">User Login</Nav.Link>
            <Nav.Link className='li-elements' href="#pricing">Official Login</Nav.Link>
            <Nav.Link className='li-elements' href="#pricing">Contact Us</Nav.Link>
          </Nav>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Headertwo