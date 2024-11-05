import React from 'react';
import { Link } from 'react-route-dom';

const Product = ({ product }) => {
    return (
        <div>
            <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
};

export default Product;