import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductUpdate = (props) => {
    const { id } = props;
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleChange = e => {
        setProduct({
          ...product,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))

        navigate("/");
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={product.title} onChange={ handleChange } />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" value={product.price} onChange={ handleChange } />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={product.description} onChange={ handleChange } />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default ProductUpdate
