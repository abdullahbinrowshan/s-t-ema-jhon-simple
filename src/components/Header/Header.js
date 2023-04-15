import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
            <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;