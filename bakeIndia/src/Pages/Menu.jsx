import React from 'react'
import {Cakes} from "../helpers/cake-items"
import MenuItem from "../Components/MenuItem"
import "../Styles/Menu.css"
const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>CATALOUGE</h1>
        <div className="menuList">
            {Cakes.map((menuItem, key) => {
                return(
                    <MenuItem
                    key={key}
                    image={menuItem.image}
                    name={menuItem.name}
                    price={menuItem.price} />

                )
            })}

        </div>
    </div>
  )
}

export default Menu