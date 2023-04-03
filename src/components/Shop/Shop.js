import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products/* , cart */])


    const handleAddToCart = selectedProduct => {
        let newCart = [];

        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity+= 1;
            newCart = [...rest, exist]
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
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;