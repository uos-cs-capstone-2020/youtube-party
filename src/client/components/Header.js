import React from 'react';
import logo from '.././youtubePartyLogo.png';
import './Header.css';

function Header(){
    return(
        <div className="Header">
            <img src={logo} alt="logo" />
            <a href="/">Youtube Party</a>
        </div>
    )
}

export default Header;