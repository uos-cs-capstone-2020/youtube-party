import React from 'react';
import Chat from '../components/Chat';

function room({location}) {
    return(
        <div className="container">
            <div className="head">
                Nav
            </div>
            <div className="body">
                <div className="conetent">
                    <div className="screen">Screen</div>
                    <Chat location={location} />
                </div>
                <div className="watchlater">
                    watchlater
                </div>
            </div>
            <div className="foot">
                room 제작자 정보.... 깃허브.... contact...
            </div>
        </div>
    );
}

export default room;