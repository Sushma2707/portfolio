import React from 'react'
import "./Project.css"
const Projects = () => {
  return (
   <>
   <div className="container project" id="projects">
   <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
        <hr />
        <p className="pb-3 text-center">Explore my top three recent projects, each accompanied by live links for a hands-on experience and direct access to the source code. 
        Dive into these real-world examples to witness my proficiency in web development and gain insight into the practical applications of my skills.
         Click on the live links and examine the source code to see firsthand the innovative solutions I've implemented.
         </p>
         {/* card design */}
         <div className="row" id="ads">
            <div className="col-md-4">
                <div className='card rounded'>
                    <div className="card-image">
                        <span className="card-notify-badge">Frontent</span>
                        <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">HTML</span>
                        <span className="card-detail-badge">CSS</span>
                        <span className="card-detail-badge">JavaScript</span>
                        <span className="card-detail-badge">React</span>
                    </div>
                    <div className="card-body text-center">
                      <div className="ad-title m-auto"> 
                      <h5 className='text-uppercase'>IPL DashBoard</h5>
                      </div>
                      <a className='ad-btn' href="https://sonyiplre.ccbp.tech/">View</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='card rounded'>
                    <div className="card-image">
                        <span className="card-notify-badge">Frontend</span>
                        <img src="https://repository-images.githubusercontent.com/362855528/379c7780-ac59-11eb-93d2-39edec16390a" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">HTML</span>
                        <span className="card-detail-badge">CSS</span>
                        <span className="card-detail-badge">JavaScript</span>
                        <span className="card-detail-badge">React</span>
                    </div>
                    <div className="card-body text-center">
                      <div className="ad-title m-auto"> 
                      <h5 className='text-uppercase'>Caliculating Letters App</h5>
                      </div>
                      <a className='ad-btn' href="https://sonyreactpra8a.ccbp.tech/">View</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='card rounded'>
                    <div className="card-image">
                        <span className="card-notify-badge">Frontend</span>
                        <img src="https://codingartistweb.com/wp-content/uploads/2021/02/To-Do-list-small-01.png" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">HTML</span>
                        <span className="card-detail-badge">CSS</span>
                        <span className="card-detail-badge">JavaScript</span>
                        <span className="card-detail-badge">Bootstrap</span>
                    </div>
                    <div className="card-body text-center">
                      <div className="ad-title m-auto"> 
                      <h5 className='text-uppercase'>To Do List App</h5>
                      </div>
                      <a className='ad-btn' href="https://todoprosus.ccbp.tech/">View</a>
                    </div>
                </div>
            </div>
         </div>
   </div>
   
   </>
  )
}

export default Projects