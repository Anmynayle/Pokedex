import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

function App() {
  

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home/>}/>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<h2>pokeId</h2>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
