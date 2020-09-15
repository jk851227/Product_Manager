import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const ProductList = () => {
  const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    },[products])

  return (
    <>
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
                        <td>
                            <Link to={`/${product._id}/edit`}>Edit</Link> | 
                            <DeleteButton productId={product._id} success={() => navigate("/")} />
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </>
  );
};

export default ProductList;
