import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ item, handleDeleteItem }) => {
    const { img, name, price, quantity, shipping, id } = item;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className='review-details'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping charge: {shipping}</p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleDeleteItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;