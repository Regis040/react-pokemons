import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Pokemons from './pages/Pokemons.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/pokemons" element={<Pokemons /> } />  
      </Routes>    
    </BrowserRouter>
  );
}
export default App;
