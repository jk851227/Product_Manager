import React from 'react';
import { Link } from '@reach/router';

const ProductList = (props) => {
    const { products } = props;
    return (
        <div>
            {
                products.map((product, idx) => {
                    return <Link to={`/products/${product._id}`} key={idx}><p>{product.title}</p></Link>
                })
            }
        </div>
    )
}

export default ProductList;