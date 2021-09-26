import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    const search = <FontAwesomeIcon icon={faSearch} />

    return (
        <div className='navbar'>
            <div className='site-title'>
                <h1>DocTime</h1>
            </div>
            <nav>
                <ul><a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                </ul>
            </nav>
            <div className='search-bar'>
                <input placeholder='Search Here' type="text" />
                <button>{search}</button>
            </div>
        </div>
    );
};

export default Header;