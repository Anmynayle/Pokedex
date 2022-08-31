import React from 'react'
import Nav from '../Nav/Nav'
import './Pokedex.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Search from '../search/Search'
import { useSelector } from "react-redux";
import CardContainer from './CardContainer'
import Filters from '../Filters/Filters'

const Pokedex = () => {

  const nameTrainer=useSelector((state)=>state.nameTrainer)

  const [pokemons, setPokemons] = useState()

  const [pokemonSearch, setPokemonSearch] = useState()

  const [typePokemon, setTypePokemon] = useState()


  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon`
    axios.get(url)
    .then(res=>setPokemons(res.data.results))
    .catch(err=>console.log(err))
  }, [])

console.log(pokemons)
  return (
    <div>
      <Nav/>
      <div className="saludo">
        <p><span>Welcome {nameTrainer},</span>  here you can find all the info about your pokemons</p>
      </div>
      <div className="action_menu">
       <Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch}/>
       <Filters setPokemons={setPokemons}/>
       </div>
   
          <CardContainer  pokemons={pokemons} setPokemons={setPokemons} pokemonSearch={pokemonSearch}/>
    
    </div>
  )
}

export default Pokedex