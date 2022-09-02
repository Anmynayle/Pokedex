import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setNameTrainer } from '../../store/slice/nameTrainer.slice'
import './Home.css'
const Home = () => {

  

  const dispatch=useDispatch()

  const navigate=useNavigate()

  const handleSubmit =  e =>{
    e.preventDefault()
    const inputValue=e.target.name.value.trim()
    if(inputValue.length != 0){
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value=''
  };

    
  return (
    <section className='heroPokemon'>
      <div className="heroBody">
       <div className='logoI'>
          <img src="img\image11.svg" alt="" />
       </div>
       <div className='heroTitlePrincipal'>
          <h2>¡Hello Trainer!!</h2>
          <h3>Give me your name to start</h3>
       </div>
       <form onSubmit={handleSubmit}>
          <input id='name' type="text" placeholder='Tu Nombre..' />
          <button>Comenzar</button>
       </form>
      </div>
      <footer className='footerHero'>
       <div className='fblack'></div>
        <div className='circle'>
          <img src="img\homeHero\Ellipse 3.svg" alt="" />
        </div>
       <div className='fblack'></div>
      </footer>
    </section>
  )
}

export default Home