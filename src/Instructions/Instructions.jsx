import React from 'react'
import "./Instruction.css"
import { FaFingerprint, FaListOl, FaRupeeSign, FaUserCheck } from "react-icons/fa";
import { Button } from 'react-bootstrap'
const Instructions = () => {
  return (
    <div>
        <div className='container-fluid instrction'>
            <div className='row p-5'>
                <div className='col-sm-12 p-3'>
                    <div className='heading pb-2'>
                        <h2 className='instruction-heading'>
                            <small>
                            Instructions/Documents for Registration
                            </small>
                            <br />
                            <small style={{color:"green"}}>
                        റെജിസ്ട്രേഷനുള്ള നിർദേശങ്ങൾ/പകർപ്പുകൾ
                            </small>
                        </h2>
                     </div>
                </div>

                <div className='col-6 col-sm-3 mb-3'>
                    <Button variant="primary" className='h-100 p-2 w-100'>
                    <FaListOl style={{fontSize:"40px"}}/>
                    <h6  className='p-2'>
                        Instructions
                        <br />
                        നിർദേശങ്ങൾ
                    </h6>
                    </Button>
                </div>
                <div className='col-6 col-sm-3 mb-3'>
                    <Button variant="warning" className='h-100 p-2 w-100'>
                    <FaRupeeSign style={{fontSize:"40px"}}/>
                    <h6  className='p-2'>
                        Income Certificate
                        <br />
                        വരുമാന സർട്ടിഫിക്കറ്റ് 
                    </h6>
                    </Button>
                </div>
                <div className='col-6 col-sm-3 mb-3'>
                    <Button variant="danger" className='h-100 p-2 w-100'>
                    <FaUserCheck style={{fontSize:"40px"}}/>
                    <h6  className='p-2'>
                        Sakshyapathram
                        <br />
                        സാക്ഷ്യപത്രം 
                    </h6>
                    </Button>
                </div>
                <div className='col-6 col-sm-3 mb-3'>
                    <Button variant="success" className='h-100 p-2 w-100'>
                    <FaFingerprint  style={{fontSize:"40px"}}/>
                    <h6 className='p-2'>
                       Sathyaprasathawana
                        <br />
                        സത്യപ്രസ്താവന 
                    </h6>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructions