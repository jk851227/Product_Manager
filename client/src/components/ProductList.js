import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    },[])
  return (
    <>
        {
            loaded ?
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, idx) => {
                    return (
                        <tr key={idx}>
                            <td><Link to={`/${product._id}`}><p>{product.title}</p></Link></td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td>Delete</td>
                        </tr>
                    )
                })}
                </tbody>
            </table> 
            :
                <p>Loading...</p>
        }
    </>
  );
};

export default ProductList;
