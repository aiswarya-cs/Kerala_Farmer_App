import React from 'react';
import { Card, Figure } from 'react-bootstrap';
import "./Members.css";

const Member = () => {
  const teamMembers = [
    { image: "https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/cm.jpg", name: "sri.Pinarayi vijayan", Role: "Cheif Minister" },
    { image: "https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/agriminister.jpg", name: "sri.P.Prasad", Role: "Minister for Agriculture" },
    { image: "https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/chairman.jpg", name: "Prop.(Dr.).P.Rajendran", Role: "Chairman" },
    { image: "https://www.kfwfb.kerala.gov.in/websitesupportfiles/images/cewceo_board.jpg", name: "Sri.Sarat Chandran C.S.", Role: "CEO" }
  ];

  return (
    <div>
      <div className='members'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2 className='ourteam'>OUR <span>TEAM</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className='col-12 col-md-3 col-lg-3 col-sm-3 figure'>
                <Card style={{ width: '18rem',border:"none", margin:"15px"}}>
                 <Card.Img variant="top" 
                 src={member.image} />
                 <Card.Body className='members-body'>
               <Card.Title>{member.name}</Card.Title>
               <p>{member.Role}</p>
              
               </Card.Body>
               </Card>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
