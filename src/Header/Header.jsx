import React from 'react'
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Headertwo from '../Header2/Headertwo';

const Header = () => {
    

  return (
    <div>
        <Navbar className="navbar">
            <Container>
            <Navbar.Brand href="#home">
            <img
              src='https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/logo.png'
              width="auto"
              height="auto"
              className='logo-img me-5'/>
          </Navbar.Brand>
                  <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    
                <ul className='list-element'>
                    <li className='tsr-and-icon'>
                          <IoLocationSharp  style={{color:"green", fontSize:"25px"}}/>Thrissur</li>
                    <li className='tsr-and-icon'>
                        <IoMdMail style={{color:"green", fontSize:"25px"}}/>karshakapension123@gmail.com</li>
                    <li className='tsr-and-icon'>
                        <FaPhoneAlt style={{color:"green", fontSize:"25px"}}/>0487-2320500, 0495-2998148 (Reg Off., Kozhikode)
                    </li>
                </ul>
                  </Navbar.Collapse>
            </Container>
        </Navbar>
<Headertwo/>
    </div>
  )
}

export default Header