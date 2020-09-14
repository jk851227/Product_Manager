import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductDetail = (props) => {
    const [ product, setProduct ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false)
            })
            .catch(err => console.log("Error: ", err));
    }, [])

    return (
        <div>
            <Link to="/">Home</Link>
            {
                loading ?
                <p>Loading...</p> :
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            }
        </div>
    )
}

export default ProductDetail
