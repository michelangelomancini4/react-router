import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {

        // chiamata per recuperare i post
        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(data => setProdotti(data));
    }, []);

    return (
        // output in pagina
        <div className='productspage'>
            <h2>I NOSTRI PIATTI:</h2>
            <ul>
                {prodotti.map(prodotto => (
                    <li key={prodotto.id}>
                        <NavLink to={`/products/${prodotto.id}`}>{prodotto.name}</NavLink>
                        <img src={prodotto.image} alt="#" />
                        <p>{prodotto.content}</p>
                        <label className='ingredients'>{prodotto.ingredients}</label>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Prodotti;