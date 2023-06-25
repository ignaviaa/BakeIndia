import React from 'react'
import CoverImage from "../assets/Cover/cover4.png"
import About from "../Pages/About"
import Specialities from '../Pages/Specialities'
import Gallery from '../Pages/Gallery'
import Discount from "../Pages/Discount"
import Animation from '../Components/Animation'
import Custom from "../Pages/customCake"
import Footer from "../Pages/Footer"
import "../styles/Home.css"

const Home = () => {
  return (
    <>
    <div className='home' style={{ backgroundImage: `url(${CoverImage})`}}></div>
    <About />
    <Specialities />
    <Gallery />
    <Discount />
    <Animation />
    <Custom />
    <Footer />
    </>

  )
}

export default Home