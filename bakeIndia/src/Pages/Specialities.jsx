import React from 'react'
import { Parallax } from 'react-parallax';
import "../Styles/Specialities.css"
import variety from "../assets/Icons/pastry.png"
import Donut from "../assets/Icons/donut.png"
import cake from "../assets/Icons/wedding-cake.png"
import creme from "../assets/Cover/chocob.jpeg"


const Specialities = () => {
  return (
       <Parallax className='speciality' bgImage={creme} strength={400}>
          
      <div className="container">
        <div className="specialHeader">
            Our Specialities<hr />
        </div>
        <div className="icons">
          <div className="range">
            <img src={variety} />
          </div>
          <div className="donut">
            <img src={Donut} />
          </div>
          <div className="cake">
            <img src ={cake} />
          </div>
          </div>

        <div className="Head">

        <div className="VHeader">
          <h2>VARIETY RANGE</h2>
          <br />
          <p>Our products range is extensive and continues to grow with the new ideas and customer demand.</p>
        </div>
        <div className="DHeader">
          <h2>UNIQUE TASTE</h2>
          <br />
          <p>Our unique cake taste lies into the combination of the quality of the ingredients and our baking process.</p>
        </div>
        <div className="CHeader">
          <h2>CUSTOM CAKES</h2>
          <br />
          <p>We aim for a customized for each and every one of our customers by complimenting exciting new designs.</p>
        </div>
        </div>
        </div>


      </Parallax>

    
        
      
  )
}

export default Specialities