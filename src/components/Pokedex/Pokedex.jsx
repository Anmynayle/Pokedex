import React from 'react'
import Nav from '../Nav/Nav'
import './Pokedex.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import Search from '../search/Search'
import { useSelector } from "react-redux";
import CardContainer from './CardContainer'

const Pokedex = () => {

  const nameTrainer=useSelector((state)=>state.nameTrainer)

  const [pokemons, setPokemons] = useState()

  const [pokemonSearch, setPokemonSearch] = useState()


  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon`
    axios.get(url)
    .then(res=>setPokemons(res.data))
    .catch(err=>console.log(err))
  }, [])

  
  return (
    <div>
      <Nav/>
      <div className="saludo">
        <p><span>Welcome {nameTrainer},</span>  here you can find all the info about your pokemons</p>
      </div>
       <Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch}/>
       <CardContainer  pokemons={pokemons} setPokemons={setPokemons} pokemonSearch={pokemonSearch}/>
    </div>
  )
}

export default Pokedex