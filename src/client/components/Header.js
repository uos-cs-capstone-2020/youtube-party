import React from 'react';
import logo from '.././youtubePartyLogo.png';
import './Header.css';

function Header(){
    return(
        <div className="Header">
            <img src={logo} alt="logo" />
            <div className="title">Youtube Party</div>
        </div>
    )
}

export default Header;