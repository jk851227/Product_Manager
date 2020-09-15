import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

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
  }, [id]);

  const updateProduct = (product) => {
    axios
      .patch(`http://localhost:8000/api/products/${id}`, product)
      .catch((err) => console.log(err));

    navigate('/');
  };

  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Update Product</h1>
      {
          loaded &&
          <>
            <ProductForm
                submitProp={updateProduct}
                titleProp={product.title}
                priceProp={product.price}
                descProp={product.description}
            />
            <DeleteButton productId={product._id} success={() => navigate("/")} />
          </>
      }
    </div>
  );
};

export default ProductUpdate;
