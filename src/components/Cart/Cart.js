import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const user = <FontAwesomeIcon icon={faUser} />
    const { cart } = props;
    console.log(cart);
    const total = cart.reduce((previous, product) => previous + product.fee, 0);
    const handleCart = () => {
        const carted = document.getElementById('carted')
        carted.style.display = 'none'
    }


    console.log(total)
    return (
        <div className="cart">
            <h3>Doctor Added: <small className='user'>{user}</small> {props.cart.length} </h3>

            <div>
                {
                    cart.map(product => <div id='carted' className='carted-prod'>
                        <div>
                            <img src={product.image} alt="" width="40px" />
                        </div>
                        <div>
                            <p>{product.name}</p>
                        </div>
                        <div className='carted-button'>
                            <button onClick={handleCart}>X</button>
                        </div>
                    </div>)
                }
            </div>
            <h3>Total Cost: ${total}</h3>
        </div>
    );
};

export default Cart;
