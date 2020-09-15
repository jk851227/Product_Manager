import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import ProductForm from '../components/ProductForm';

const ProductUpdate = (props) => {
  const { id } = props;
  const [product, setProduct] = useState({});
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true)
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleChange = e => {
  //     setProduct({
  //       ...product,
  //       [e.target.name]: e.target.value
  //     })
  // }

  // const handleSubmit = e => {
  //     e.preventDefault();
  //     axios.patch(`http://localhost:8000/api/products/${id}`, product)
  //         .then(res => setProduct(res.data))
  //         .catch(err => console.log(err))

  //     navigate("/");
  // }

  const updateProduct = (product) => {
    axios
      .patch(`http://localhost:8000/api/products/${id}`, product)
      // .then(res => setProduct(res.data))
      .catch((err) => console.log(err));

    navigate('/');
  };

  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Update Product</h1>
      {
          loaded &&
            <ProductForm
                submitProp={updateProduct}
                titleProp={product.title}
                priceProp={product.price}
                descProp={product.description}
            />
      }
      {/* <form onSubmit={ handleSubmit }>
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
            </form> */}
    </div>
  );
};

export default ProductUpdate;
