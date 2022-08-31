import React from 'react'
import Pagination from './Pagination'
import PokemonCard from './PokemonCard'
import { useState } from 'react'

const CardContainer = ({pokemons,pokemonSearch}) => {

  const [page, setPage] = useState(1)

  const [forPage, setForPage] = useState(9)

  const maximo = Math.ceil(pokemons?.length / forPage)

if(!pokemonSearch){
    return (
        <div className="container_CardPoke">
        {
          pokemons?.slice(
            (page -1)* page,
            (page -1) * forPage + forPage
          ).map(pokemon=>(
            <PokemonCard
             key={pokemon.url}
             url={pokemon.url}
            />
          ))
        }
        <Pagination page={page} setPage={setPage} maximo={maximo}/>
        </div>
  )
}else{
    return(
        <div className="container_CardPoke">
          <PokemonCard url={pokemonSearch}/>    
        </div>
    )
}
}

export default CardContainer