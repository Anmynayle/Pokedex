import React from 'react'
import './Home.css'
const Home = () => {
    
  return (
    <section className='heroPokemon'>
      <div className="heroBody">
       <div>
          <img src="src\assets\img\image 11.svg" alt="" />
       </div>
       <div className='heroTitlePrincipal'>
          <h2>¡Hola entrenador!</h2>
          <h3>Para poder comenzar, dame tu nombre</h3>
       </div>
       <form>
          <input id='name' type="text" placeholder='Tu Nombre..' />
          <button>Comenzar</button>
       </form>
      </div>
      <footer className='footerHero'>
        <div className='circle'>
          <img  className='circle2' src="src\assets\img\homeHero\Ellipse 3.svg" alt="" />
          <img src="src\assets\img\homeHero\Ellipse 4.svg" alt="" />
        </div>
       <div className='fblack'></div>
      </footer>
    </section>
  )
}

export default Home