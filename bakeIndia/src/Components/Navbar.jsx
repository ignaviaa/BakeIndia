import React from 'react'
import Logo from "../assets/logo/logo2.png"
import {Link}  from "react-router-dom"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navContainer">
    <div className="detail">
      <p>WE ARE NOW ONLINE, ORDER NOW! WE ARE OPEN FROM 9AM TO 11PM EVERYDAY, FOR FURTHER DETAILS CONTACT US.</p>
    </div>
    <div className='navbar'>
        <div className="left">
            <Link to = "/"> HOME </Link>
            <Link to = "/about"> ABOUT </Link>
            <Link to = "/catalogue"> CATALOGUE </Link>
        </div>
        <div className="logo">
            <img src={Logo} />
        </div>
        <div className="right">
        <Link to = "/outlets"> OUTLETS </Link>
            <Link to = "/contact"> CONTACT US </Link>

        </div>
        <div className="ok"></div>

    </div>
    <div className="wave0"></div>
    </div>
  )
}

export default Navbar