import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Card.css'

const Card = (props) => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const card = props.card;
    const { image, name, phone, email, fee, age } = card;
    return (

        <div className='card-container'>
            <div className='profile-info'>
                <div className='profile-image'>
                    <img src={image} alt="" />
                </div>
                <div className="card-info">
                    <h4>{name}</h4>
                    <p>Age: {age}</p>
                    <small>Contact: {phone}</small>
                    <br />
                    <small>Email: {email}</small>
                    <h3>Fee:${fee}</h3>
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => props.handlePurchase(card)}>{shoppingCart} Add To Cart</button>
                <br />
                <small className='instagram'>{instagram}</small>
                <small className='facebook'>{facebook}</small>
                <small className='linkedin'>{linkedin}</small>
            </div>
        </div>

    );
};

export default Card;