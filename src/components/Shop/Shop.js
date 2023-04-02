import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
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
            <div className='order-summery-container'>
                <h2>Order summery</h2>
                <p>Total product: {cart.length} </p>
            </div>
        </div>
    );
};

export default Shop;