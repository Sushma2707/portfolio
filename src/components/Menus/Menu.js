import React from 'react'
import "./Menu.css"
import logo from "../../assets/images/profilepic.jpg"
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';




const Menu = ({toggle}) => {
  return (
    <>
    {toggle?(
      <>
      <Zoom>
      <div className="navbar-profile-pic">
      <img src={logo} alt="profile pic" />
      </div>
      </Zoom>
     <Fade left>
    <div className="nav-items">
    <div className="nav-item">
      <div className="nav-link">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
        <FcHome />
        Home
        </Link>
      </div>
        <div className="nav-link">
        <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
        <FcAbout />
        About
        </Link>
        </div>
        <div className="nav-link">
        <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
        <FcReadingEbook />
        Education
        </Link>
        </div>
        <div className="nav-link">
        <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
        <FcBiotech />
        Tech Stack
        </Link>
        </div>
        <div className="nav-link">
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
        <FcVideoProjector />
        Projects
        </Link>
        </div>
        <div className="nav-link">
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
        <FcBusinessContact />
        Contact
        </Link>
        </div>
    </div>
  </div>
  </Fade>
  </>

    ):(
      <>
       <div className="nav-items">
    <div className="nav-item">
      <div className="nav-link">
      <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
        <FcHome title="Home"/>
        </Link>
        </div>
        <div className="nav-link">
        <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
        <FcAbout title="About"/>
        </Link>
        </div>
        <div className="nav-link">
        <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
        <FcReadingEbook title="Education"/>
        </Link>
        </div>
        <div className="nav-link">
        <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
        <FcBiotech title="TechStack"/>
        </Link>
        </div>
        <div className="nav-link">
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
        <FcVideoProjector title="Projects"/>
        </Link>
        </div>
        
        <div className="nav-link">
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
        <FcBusinessContact title="Contact"/>
        </Link>
        </div>
    </div>
  </div>
      </>
    )}
    
    </>
  )
}

export default Menu;