import React from 'react'
import  './Nav.css'

const Nav = () => {

  return (
    <header className='header-Pokedex'>
    <div className='logo-pokedex'>
        <img src="img/navHero/logoheader.svg" alt="" />
    </div>
    <div className='black-line'>
        <div className="closet-ball">
            <img src="img/navHero/Ellipse 3.svg" alt="" />
            <img className='ball-point' src="img/navHero/Ellipse 4.svg" alt="" />
        </div>
    </div>
</header>
  )
}

export default Nav