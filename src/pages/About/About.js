import React from 'react'
import "./About.css"
import image from "../../assets/images/pic.jpg"
import Pulse from 'react-reveal/Pulse';
const About = () => {
  return (
    <>
    <Pulse>
    <div className="about" id="about">
        <div className="row">
        
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              
                <img  src={image} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-content">
                <h1>
                    About Me
                </h1>
                <p>
                Hey there! I'm Sushma, a web developer who turns ideas into awesome websites. I love making things look good and work smoothly. 
                Join me on a journey through the world of web development,
                 where every project is a chance to create something amazing. 
                 Let's build the web together!
                </p>
            </div>
        </div>
    </div> 
    </Pulse> 
    </>
  )
};

export default About