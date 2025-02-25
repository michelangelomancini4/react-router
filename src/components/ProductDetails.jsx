import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// importo link per gestire prev-next
import { Link } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState({});

    useEffect(() => {
        // chiamata per recuperare i post

        fetch(`http://localhost:5000/posts/${id}`)
            .then(response => response.json())
            .then(data => setProdotto(data));
    }, [id]);



    return (
        <>
            {/* logica per gestire visualizzazione pietanza precedente o successiva */}
            <div>
                <Link to={`http://localhost:5173/products/${id - 1}`} className='prevnext' >&#8656; POST PRECEDENTE </Link>
                <Link to={`http://localhost:5173/products/${parseInt(id) + 1}`} className='prevnext' >POST SUCCESSIVO &#8658;</Link>
            </div>
            <div className='ingredient-list'>
                <h2><strong>Dettagli </strong>(piatto numero {prodotto.id}):</h2>
                <h3>  &#8658;{prodotto.name}</h3>
                <img src={prodotto.image} alt={prodotto.name} />
                <p>{prodotto.content}</p>
                <label>INGREDIENTI PRINCIPALI:{prodotto.ingredients}</label>
            </div>
        </>
    );
}

export default ProductDetails;