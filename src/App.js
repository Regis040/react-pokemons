import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Pokemons from './pages/Pokemons.js';
import PokemonDetailPage from './pages/PokemonDetailPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/pokemons" element={<Pokemons /> } />  
        <Route path="/pokemon/:pokemonId/detail" element={<PokemonDetailPage />} />
      </Routes>    
    </BrowserRouter>
  );
}
export default App;
