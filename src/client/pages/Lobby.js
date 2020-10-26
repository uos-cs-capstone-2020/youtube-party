import React from 'react';

import Header from '../components/Header';
import Join from '../components/Join';
import Footer from '../components/Footer';
import './background.css';
import './Lobby.css';

function Lobby(){
    return(
        <div className="Lobby">
            <Header />
            <Join />
            <Footer />
        </div>
    )
}

export default Lobby;