import axios from 'axios'
import { useEffect,useState } from 'react'
import Stat from './Stat'
import './PokemonCard.css'

const PokemonCard = ({url}) => {

  const [poke, setPoke] = useState()

  useEffect(() => {
    axios.get(url)
     .then(res=> setPoke(res.data))
     .catch(err => console.log(err)) 
  }, [url])
 
  return (
      <article className={`card_container bd-${poke?.types[0].type.name}`}>
        <header className={`header_card bg-${poke?.types[0].type.name}`}>
          <img src={poke?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>
        <section className='card_body'>
          <h3>{poke?.name.toUpperCase()}</h3>
          <ul className='card_slot'>
          {
            poke?.types.map(slot => (
              <li key={slot.type.url}>{slot.type.name[0].toUpperCase() + slot.type.name.slice(1)}</li>
            ))
          }
          </ul>
        </section>
        <footer>
          <ul className='container_stat'>
            
            <Stat poke={poke}/>
            {/* {
              poke?.stats.map(stat =>(
                <Stat
                  key={stat.url}
                  infoStat={stat}
                />
                  
              ))
            } */}
          </ul>
        </footer>
      </article>
    )
  }
  
  export default PokemonCard