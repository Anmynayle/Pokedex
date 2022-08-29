import axios from 'axios'
import React from 'react'
import './Filter.css'
import { useEffect,useState } from 'react'

const Filters = ({setPokemons}) => {
    const [typePokemon, setTypePokemon] = useState()
    const [filterPokemon, setFilterPokemon] = useState()


useEffect(() => {
    const URLType = `https://pokeapi.co/api/v2/type/`
         axios.get(URLType)
    .    then(res => setTypePokemon(res.data.results))
}, [])

  useEffect(() => {
    let change = []
    if (filterPokemon){
        for (let i = 0; i < filterPokemon.length; i++) {
            const element = filterPokemon[i].pokemon;
            change.push(element)
        }
       setPokemons(change)
    }

    }, [filterPokemon])

 
  

    function handleFilter2 (e){
        axios.get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
        .then(res => setFilterPokemon(res.data.pokemon))
        .catch(err=>console.log(err))
    }
  

  return (
    <div>
    <select onChange={handleFilter2}>
        <option value=''>All</option>
        {
            typePokemon?.map(pokemons => (
                <option  value={pokemons.name} key={pokemons.name}>{pokemons.name}</option>
            ))
        }
    </select>
    </div>
  )
}
export default Filters