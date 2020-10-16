import React from 'react';
import Join from '../components/Join';

function lobby({location}) {
    return(
        <div className="container">
            <div className="head">
                Nav
            </div>
            <div className="body">
                <div className="join">
                    <Join location={location}/>
                </div>
                <div className="roomEntry">
                    roomEntry
                </div>
            </div>
            <div className="foot">
                lobby 제작자 정보.... 깃허브.... contact...
            </div>
        </div>
    );
}

export default lobby;