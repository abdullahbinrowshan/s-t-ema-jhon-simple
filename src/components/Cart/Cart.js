import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, clearCart}) => {

    let quantity = 0;
    let totalPrice = 0;
    let shippingCharge = 0

    for (const product of cart) {
        quantity+= product.quantity;
        totalPrice+=product.price * product.quantity;
        shippingCharge+=product.shipping;
    }

    const tax = Number((totalPrice * 0.065).toFixed(2))

    const grandTotal = (tax + totalPrice + shippingCharge).toFixed(2)

    return (
        <div className='cart'>
            <h2 className='cart-heading'>Order summery</h2>
            <p>Selected Item: {quantity} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Charge: ${shippingCharge} </p>
            <p>Tax: ${tax} </p>
            <h4 className='grand-total'>Grand Total: {grandTotal} </h4>
            <div className="cart-buttons">
                <button onClick={clearCart} className="clear-cart">
                    <span>Clear Cart </span> 
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default Cart;