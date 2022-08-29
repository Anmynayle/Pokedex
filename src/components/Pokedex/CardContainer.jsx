import React from 'react'
import PokemonCard from './PokemonCard'

const CardContainer = ({pokemons,pokemonSearch}) => {

if(!pokemonSearch){
    return (
        <div className="container_CardPoke">
        {
          pokemons?.results.map(pokemon=>(
            <PokemonCard
             key={pokemon.url}
             url={pokemon.url}
            />
          ))
        }
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