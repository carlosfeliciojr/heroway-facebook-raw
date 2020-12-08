import React from 'react';
import './header.css';
import image from '../../assets/img/facebook-logo.svg';


function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={image} alt="Facebook Logo" />
            </div>
        </header>
    );
}

export default Header;