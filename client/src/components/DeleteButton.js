import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
    const { productId, success } = props;

    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                success()
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={ deleteProduct }>
                Delete
            </button>
        </div>
    )
}

export default DeleteButton
