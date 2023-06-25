import React from 'react'
import "../Styles/Discount.css"
import donut from "../assets/Cover/donuts.jpeg"

const Discount = () => {
  return (
<div className="dContainer">
    <div className='discount'>
        <div className="disimg">
            <img src={donut} /></div>

            <div className="redrec">
                <div className="sub">
                Get upto <br /> <span>50% </span>off
                </div>  
                <div className="details">
                Delightful Bites at Half the Price! 🍰🎉 Enjoy Up to 50% Off on Pastries, Cakes, and Snacks! 😍🎂 <br />Share, Subscribe, and Save today! 
                </div>
                <div className="tag">
                  #BakeIndia
                  <hr />
                </div>
            </div>
        </div>
        </div>
       
  )
}

export default Discount