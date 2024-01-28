import React from 'react'
import { Button, Carousel} from 'react-bootstrap'
import "./Banner.css"
import { FaUser } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";

const Banner = () => {
    

  return (
    <div>
        <Carousel data-bs-theme="dark" style={{marginTop:"-3em", textAlign:"left"}}>
      <Carousel.Item>
        <img
          src="https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/banner.jpg"
        //   alt="First slide"
          style={{height:"500px", width:"100vw",overflow:"hidden"}}
        />
        <Carousel.Caption className='main-banber'>
          <h5 className='heading-banner'>സ്വാഗതം</h5>
          <h5 className='heading2-banner'>കേരള കര്‍ഷകരേ ...</h5>
           <p style={{color:"black",fontSize:"18px",textAlign:"left"}}>കേരള സംസ്ഥാനത്ത് കാർഷിക മേഖലയിലും അനുബന്ധ മേഖലകളിലും ഏർപ്പെട്ടിരിക്കുന്ന കർഷകരുടെ ക്ഷേമം ലക്ഷ്യമിടുകയും പെൻഷൻ നൽകുകയും സാമ്പത്തിക സഹായം നൽകുകയും അതുവഴി അവർക്ക് സാമൂഹിക സുരക്ഷ ഉറപ്പാക്കുകയും ചെയ്യുന്നു.</p>
           <Button variant="success" className='button-login'><FaUser /> പുതിയ അംഗത്വം എടുക്കുക </Button>
           <Button variant="warning"><FaListOl /> നിർദേശങ്ങൾ/പകർപ്പുകൾ</Button>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
        //   className="d-block w-100"
          src="https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/banner.jpg"
        //   alt="Second slide"
          style={{height:"500px", width:"100vw",overflow:"hidden"}}
        />
        <Carousel.Caption className='main-banber'>
          <h5 className='heading-banner'>WELCOME</h5>
          <h5 className='heading2-banner'>KERALA FARMERS</h5>
           <p style={{color:"black",fontSize:"18px",textAlign:"left"}}>Aiming the welfare of the farmers engaged in agriculture and allied sectors in the State of Kerala and to pay Pension and to extend financial support thereby ensuring them social security.</p>
           <Button variant="success" className='button-login2'><FaUser /> New Registration</Button>
           <Button variant="warning"><FaListOl /> Instructions/Documents</Button>
        </Carousel.Caption>
      </Carousel.Item>
    {/* </Container> */}
    </Carousel>
    </div>
  )
}

export default Banner