import React from 'react'
import CoverImage2 from "../assets/Cover/cover3.png"
// import cupcake from "../assets/Cover/cpasty.jpeg"
// import cupcake from "../assets/Cover/cupcake.png"
import "../Styles/About.css"

const About = () => {
  return (
    <div className="about" >
      <div className="wave"></div>
        <div className="header">
            About Us<hr />
        </div>
        
    <div className="aboutimg">
      <img src={CoverImage2} />
      <div className="rightrec">
        <div className="title">
            Welcome to
        </div>
        <div className="title2">
            <p>Radhe Radhe <br />
            BAKE INDIA</p>
        </div>
        <div className="intro">
            <p> The  ultimate destination for delectable pastries, savory snacks, and irresistible chocolate creations. Indulge your taste buds with our wide array of   pastries and delightful patties. Our passion for baking and commitment to quality ensure that every bite is a moment of pure bliss.</p>
        </div>
        <hr />
      </div>
    </div>
    
    
    </div>
  )
}

export default About