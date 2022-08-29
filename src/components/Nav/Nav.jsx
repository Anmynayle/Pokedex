import React from 'react'
import  './Nav.css'

const Nav = () => {

  return (
    <div className='container_header'>
        <img className='logo ' src="src\assets\img\navHero\logoheader.svg" alt="" />
        <div className='hblack'></div>
        <div className='circle_c'>
          <img src="src\assets\img\homeHero\Ellipse 3.svg" alt="" />
          <img className='circle__2' src="src\assets\img\homeHero\Ellipse 4.svg" alt="" />
        </div>
    </div>
  )
}

export default Nav