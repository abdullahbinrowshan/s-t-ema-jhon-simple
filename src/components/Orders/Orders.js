import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    const handleDeleteItem = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.length !== 0 ?
                    cart.map(item =>
                        <ReviewItem
                            key={item.id}
                            item={item}
                            handleDeleteItem={handleDeleteItem}
                        />)
                        : <h2>No Items for Review. Please <Link to={`/shop`}>Shop More.</Link> </h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart} />
            </div>
        </div>
    );
};

export default Orders;