import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav >
            <ul>
                <li><NavLink to="/"><i class="fa-solid fa-house"></i>Home</NavLink></li>
                <li><NavLink to="/chisiamo"><i class="fa-solid fa-users-between-lines"></i>Chi siamo</NavLink></li>
                <li><NavLink to="/products"><i class="fa-solid fa-utensils"></i>Piatti</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
