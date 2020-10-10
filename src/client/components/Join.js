import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string'



function Join({location}){
  const [name, setName] =useState("");
    const [room, setRoom] = useState("");
    useEffect(()=>{
        const {room, name} = queryString.parse(location.search);
        if(room)setRoom(room);
        if(name)setName(name);
    },[location]);


    return (
        <>
          <div>
          Youtube Party
          </div>
          <h1>Join</h1>
          <div>
            <input placeholder="Name"  value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Room" value={room} onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
            <button type="submit">Sign In</button>
          </Link>
        </>
    )
}


export default Join;
