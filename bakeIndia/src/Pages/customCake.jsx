import React from 'react'
import twotier from "../assets/Cover/footer4.jpeg"
import "../Styles/customCake.css"

const Custom = () => {
  return (
    <div className="customCake" >
            <div className="wave3"></div>
      
          <div className="twot">
            <img src ={twotier} />
            </div>
           
            <div className="customdetail">
       <h2> Customized Cake <br /> On Order delivery </h2>
      <div className="subx">
        <p>Indulge in Exquisite Delights, Crafted Just for You!<br /> Order Your Dream Cake Today from Bake India and Savor the Sweetest Moments of Life.<br /> <span>Delivered with Love ♡</span></p>
        </div>
        <button>Order Now</button>
        </div>
        </div>
        
   
  )
}

export default Custom