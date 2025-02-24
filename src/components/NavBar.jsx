import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/chisiamo">Chi siamo</NavLink></li>
                <li><NavLink to="/products">Prodotti</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
