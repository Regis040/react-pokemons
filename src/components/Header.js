import { Link } from "react-router-dom";
import './Header.scss';

function Header () {
    return (
        <header>            
            <nav className="headerStyle">
                     <img src="https://pngimg.com/uploads/pokemon_logo/small/pokemon_logo_PNG12.png" alt="le Logo" />
                    <ul>                        
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/pokemons">Mes Pokemons</Link></li>
                    </ul>
            </nav>
            <h1>Pokemons ... j'aime pas</h1>
        </header>
    );
}
export default Header;