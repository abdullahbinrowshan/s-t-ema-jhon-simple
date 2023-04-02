import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({ product, handleAddToCart }) => {
    const { name, seller, price, ratings, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <div className="main-info">
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                </div>
                <div className="info-footer">
                    <p><small>Manufacturer: {seller} </small></p>
                    <p><small>Rating: {ratings} </small></p>
                    <button onClick={() => handleAddToCart(product)}><span>Add to Cart </span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;