import React from 'react'
import { useTheme } from '../../context/ThemContext';
import Typewriter from 'typewriter-effect';
import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import "./Home.css"
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle Theme 
  const handleTheme = () =>{
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
    <div className='container-fluid home-container' id="home">
      <div className='theme-btn'onClick={handleTheme}>
        {theme === "light" ? <BsFillMoonStarsFill size={30}/> : <BsFillSunFill size={30}/>}
      </div>
      <div className="container home-content">
        <Fade right>
        <h2>Hi 👋 I'am a</h2>
        <h1>
        <Typewriter
         options={{
         strings: ['Fullstack Devloper!', 'Frontend Devloper!', "Mern stack Devloper!"],
         autoStart: true,
         loop: true,
         }}
        />
        </h1>
        </Fade>
        <Fade bottom>
        <div className="home-button">
          <a  className="btn btn-hire" href="https://api.whatsapp.com/send?phone=7032755190"
          rel="noreferrer"
          target="_blank"
          >Hire Me</a>
           
           <a className="btn btn-cv" href={Resume} download="sushma_resume.pdf">My Resume</a>
        </div>
        </Fade>
      </div>
    </div>
    </>
  )
}

export default Home