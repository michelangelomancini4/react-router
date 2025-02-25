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
                <Link to={`http://localhost:5173/products/${id - 1}`}>Prev</Link>
                <Link to={`http://localhost:5173/products/${parseInt(id) + 1}`}>Next</Link>
            </div>
            <div>
                <h2><strong>Dettagli:</strong> piatto numero {prodotto.id} &#8658;{prodotto.name}</h2>
                <img src={prodotto.image} alt={prodotto.name} />
                <p>{prodotto.content}</p>
                <label>{prodotto.ingredients}</label>
            </div>
        </>
    );
}

export default ProductDetails;