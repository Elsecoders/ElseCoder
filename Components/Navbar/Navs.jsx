import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
//import Button from 'react-bootstrap/Button';
const Navs = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" navbar">
        <Container>
          <Navbar.Brand to="/">
            <div className='logo-container'>
            <img
          src="../../public/Images/2.png "
          alt="ElseCoder" 
          className="d-inline-block align-top logo"
          
          />
          {/* <div className='slide'>
            <p>WHERE ALOGORITHMS MEET IMAGINATION </p>
          </div> */}
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav">
              <Nav.Link className='nav2' to="#features">HOME</Nav.Link>
              <Nav.Link className='nav2' to="#pricing">ABOUT US</Nav.Link>
              <Nav.Link className='nav2' to="#pricing">SERVICES</Nav.Link>
              <Nav.Link className='nav2' to="#pricing">CONTACT US</Nav.Link>
            </Nav>
            <Nav>
              <button  className="inqury-btn" >GET INQUIRY </button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;
