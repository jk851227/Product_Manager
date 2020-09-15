import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


const Main = () => {
  const [products, setProducts] = useState([]);

  const createProduct = (product) => {
    axios
      .post('http://localhost:8000/api/products/new', product)
      .then((res) => setProducts([
          ...products,
          res.data
      ]))
      .catch((err) => console.log('Error: ', err));
  };

  return (
    <>
      <ProductForm submitProp={ createProduct } titleProp="" priceProp={0} descProp=""/>
      <hr />
      <ProductList />
    </>
  );
};

export default Main;
