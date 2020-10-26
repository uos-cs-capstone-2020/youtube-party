import React from 'react';

import Header from '../components/Header';
import Room from '../components/Room';
import Footer from '../components/Footer';
import './background.css';
import './Rooms.css';

function Rooms({location}){
    return(
        <div className="Rooms">
            <Header/>
            <Room location={location}/>
            <Footer/>
        </div>
    )
}

export default Rooms;