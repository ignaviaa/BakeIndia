import React from 'react'
import "../Styles/Gallery.css"
import cake1 from "../assets/Cakes/1.jpg"
import cake2 from "../assets/Cakes/2.jpg"
import cake3 from "../assets/Cakes/3.jpg"
// import cake4 from "../assets/Cakes/11.png"
// import cake5 from "../assets/Cakes/6.png"
// import cake6 from "../assets/Cakes/8.png"
// import cloud from "../assets/Cover/12.jpg"





const Gallery = () => {
  return (
<>
   
    <div className="galleryContainer" >
    <div className="wave3"></div>
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
        {/* <div className="pic1">
            <img src={cake4} />
        </div>
        <div className="pic1">
            <img src={cake6} />
        </div>
        <div className="pic1">
            <img src={cake5} />
        </div> */}


        </div>
        
        </div>
        <div className="wave2"></div>
        </>
  )

}

export default Gallery