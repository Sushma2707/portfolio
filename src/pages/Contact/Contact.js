import React from 'react';
import "./Contact.css";
import Fade from 'react-reveal/Fade';
import contactusimg from  "../../assets/images/conUs.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";



const Contact = () => {
  return (
    <>
    <div className="contact" id="contact">
     <div className="card card0 border-0">
      <div className='row'>
        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
          <div className="card1">
            <div className='row border-line'>
            <Fade top>
             <img className='image' src={contactusimg} alt="contact"/>
             </Fade>
            </div>
          </div>
        </div>
        <Fade top>
        <div className="col-lg-6 col-md-6">
        
          <div className="card2 d-flex card border-0 px-4 py-5">
          <div className="row">
            <div className='row'>
            <h6>Contact with 
              <BsLinkedin color="blue" size={30} className="ms-2"/>
              <BsGithub color="black" size={30} className="ms-2"/>
            </h6>
            </div>
          <div className='row px-3 mb-4'>
            <div className='line' />
              <small className='or text-center'>OR</small>
            <div className='line' />
          </div>
        <div className='row px-3'>
         <input type="text" name="name" placeholder="Enter your Name" className="mb-3" />
        </div>
        <div className='row px-3'>
         <input type="email" name="email" placeholder="Enter your Email Address" className="mb-3" />
        </div>
        <div className='row px-3'>
         <textarea type="text" name="msg" placeholder="Write your Message" className="mb-3" />
        </div>
        <div className='row px-3'>
         <button className='button' type="submit">SEND MESSAGE</button>
        </div>

          </div>
        </div>
        </div>
        </Fade>
      </div>
     </div>
    </div>
    </>
  )
}

export default Contact