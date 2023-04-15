import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const {products} = useLoaderData()
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = []

        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                addedProducts.quantity = storedCart[id]
                savedCart.push(addedProducts);
            }
        }

        setCart(savedCart)
    }, [products])

    const handleAddToCart = selectedProduct => {
        let newCart = [];

        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity+=1
            newCart = [...rest, exists]
        }


        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        product={product}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart} />
            </div>
        </div>
    );
};

export default Shop;