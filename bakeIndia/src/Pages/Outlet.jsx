import React from 'react'
import outlet from "../assets/Cover/outlet.jpg"
import "../Styles/Outlet.css"

const Outlet = () => {
  return (
    <div className="outlet">
      <div className="oleft" style={{ backgroundImage: `url(${outlet})` }}></div>
      <div className="oright">
        <h1> OUTLET</h1>
        </div>
    </div>
  )
}

export default Outlet;