import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chisiamo">Chi siamo</Link></li>
                <li><Link to="/products">Prodotti</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
