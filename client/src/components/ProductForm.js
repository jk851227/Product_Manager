import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
  });

  const handleChange = e => {
      setProduct({
        ...product,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products/new', product)
        .then(res => console.log("Response: ", res))
        .catch(err => console.log("Error: ", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            name='price'
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            onChange={ handleChange }
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
