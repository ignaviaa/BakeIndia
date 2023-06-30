import React from 'react'
import { Parallax } from 'react-parallax';
// import CoverImage from "../assets/Cover/cover4.png"
import CoverImage from "../assets/Cover/cover9.jpeg"
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
     <Parallax className='home' bgImage={CoverImage} strength={400}>
     <div className="contento">
            <span className="imgtxt">
            Indulge in the taste of India's finest baked delights at <br /> <h3>BAKE INDIA</h3>
        </span>
        </div>
     </Parallax>
     
    
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