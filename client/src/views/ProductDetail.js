import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductDetail = (props) => {
    const { id } = props;
    const [ product, setProduct ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true)
            })
            .catch(err => console.log("Error: ", err));
    }, [id])

    return (
        <div>
            <Link to="/">Home</Link>
            {
                loaded ?
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div> :
                <p>Loading...</p> 
            }
        </div>
    )
}

export default ProductDetail
