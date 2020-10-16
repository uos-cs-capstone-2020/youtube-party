import React from 'react';
import Chat from '../components/Chat';

function room({location}) {
    return(
        <div className="container">
            <div className="head">
                YoutubeParty 로고, 이름............컨트롤
            </div>
            <div className="body">
                <div className="conetent">
                    <div className="screen">영상</div>
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