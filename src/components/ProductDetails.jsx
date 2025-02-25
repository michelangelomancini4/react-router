import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h2><strong>Dettagli:</strong> {prodotto.name}</h2>
            <img src={prodotto.image} alt={prodotto.name} />
            <p>{prodotto.content}</p>
            <label>{prodotto.ingredients}</label>
        </div>
    );
}

export default ProductDetails;