import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
        {/* text-center text-lg-start */}
    <MDBFooter className=' footer'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-5'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 mt-5 '>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="ms-auto" />
                 <img src="https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/logo.png"/>
              </h6>
              <p>
              aiming the welfare of the farmers engaged in agriculture and allied sectors
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick links</h6>
              <p>
                <a href='#!' className='text-reset'>
                 New registration
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  User Manual
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Official Login
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact U</h6>
              <p>
              <IoLocationSharp className="me-2" />
                Regional Office: samethi /building ,Venpalavattom, Anayara P.O, Thiruvananthapuram-695029
              </p>
              <p>
              <IoLocationSharp className="me-3" />
                Head Office:chembukavu P.O,Thrissur-680020
              </p>
              <p>
              <IoMdMail className="me-2"/>Karshakapension123@gmail.com
              </p>
              <p>
              <MdCall className="me-3"/>0487-2320500
              </p>
              <p>
               <MdCall className="me-3"/> 0497-29981448(Regional Office ,Kozhikode)
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 ' style={{background:"green"}}>
        © 2021 The Kerala Farmers' Welfarfooter-copyrighte Fund Board. Developed by C-DIT
        
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer