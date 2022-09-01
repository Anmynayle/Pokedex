import React from 'react'
import  './Nav.css'

const Nav = () => {

  return (
    <div className='container_header'>
        <img className='logo ' src="img\image11.svg" alt="" />
        <div className='hblack'></div>
        <div className='circle_c'>
          <img src="img\navHero\Ellipse 3.svg" />
          <img className='circle__2' src="img/navHero/Ellipse 4.svg" alt="" />
        </div>
    </div>
  )
}

export default Nav