import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

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
        </div>
    );
};

export default Cart;