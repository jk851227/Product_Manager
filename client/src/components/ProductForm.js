import React, { useState } from 'react';
// import axios from 'axios';

const ProductForm = (props) => {
  const { submitProp, titleProp, priceProp, descProp } = props;
  const [ product, setProduct ] = useState({
    title: titleProp,
    price: priceProp,
    description: descProp
  })

  const handleChange = e => {
      setProduct({
        ...product,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    submitProp(product);
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            name='title'
            value={ product.title }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            name='price'
            value={ product.price }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            value={ product.description }
            onChange={ handleChange }
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
