import React from 'react'

const ProductList = (props) => {
    const { products } = props;
    return (
        <div>
            {
                products.map((product, idx) => {
                    return <p key={idx}>{product.title}</p>
                })
            }
        </div>
    )
}

export default ProductList;