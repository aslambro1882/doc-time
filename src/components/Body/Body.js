import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Body.css'

const Body = () => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    const handlePurchase = (doctor) => {
        const newCount = [...cart, doctor]
        setCart(newCount)
    }
    return (
        <div>
            <div className='heading'>
                <h1>Doctor's Community</h1>
                <h2>"A doctor gave a man six months to live"</h2>
                <h1>Annual Fund: $1M</h1>
            </div>
            <div className='parent-body'>
                <div className='body'>
                    <div className="profile-card">
                        {
                            doctors.map(doctor => <Card
                                handlePurchase={handlePurchase}
                                key={doctor._id}
                                card={doctor} />)
                        }
                    </div>
                    <div>
                        <Cart
                            cart={cart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;