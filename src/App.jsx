import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import PokeId from './components/Pokedex/PokeId/PokeId'

function App() {
  

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home/>}/>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:name' element={<PokeId/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
