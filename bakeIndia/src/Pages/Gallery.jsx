import React from 'react'
import "../Styles/Gallery.css"
import cake1 from "../assets/Cakes/1.png"
import cake2 from "../assets/Cakes/4.png"
import cake3 from "../assets/Cakes/5.png"
import cake4 from "../assets/Cakes/11.png"
import cake5 from "../assets/Cakes/6.png"
import cake6 from "../assets/Cakes/8.png"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Gallery = () => {
  return (
    <div className="galleryContainer">
    <div className='gallery'>
        Gallery <hr /></div>
       
      <div className="picgal">

        <div className="pic1">
            <img src={cake1} />
        </div>
        <div className="pic1">
            <img src={cake2} />
        </div>
        <div className="pic1">
            <img src={cake3} />
        </div>
        <div className="pic1">
            <img src={cake4} />
        </div>
        <div className="pic1">
            <img src={cake6} />
        </div>
        <div className="pic1">
            <img src={cake5} />
        </div>

        </div>
        </div>
  )
}

export default Gallery