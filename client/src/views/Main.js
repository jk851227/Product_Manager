import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    

    return (
        <>
            
            <ProductForm />
            <hr/>
            <ProductList />
            {/* {
                loaded ?
                <ProductList products={products} /> :
                <p>Loading...</p>
            } */}
        </>
    )
}

export default Main
