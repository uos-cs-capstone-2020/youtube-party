import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import queryString from 'query-string'
import socket from "../socketConfig";
import './Join.css';


function Join(){
    const [name, setName] =useState("");
    const [room, setRoom] = useState("");
    const [rooms,setRooms] = useState(new Set());
  
    useEffect( ()=>{
      socket.emit('joinLobby');// 로비 입장 
      socket.on('rooms',(data)=>{  // 방정보 받아서 저장
        setRooms(()=>new Set(data));
        socket.on('newRoom',(data)=>{ //방 추가될때
          setRooms(rooms=>new Set(rooms.add(data)));
        })
        socket.on('removeRoom',(data)=>{// 방 제거 될떄 
          setRooms(rooms=> new Set([...rooms].filter(roomInfo => roomInfo.room !== data.room)));
        })
      })
      return ()=> socket.off();// 리스너 전부 끄기
    },[])

    return (
      <>
      <div className="enter">
        <div className = "Join">
          <h2>Join</h2>
          <div>
            <input placeholder="Name"  value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Room" value={room} onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/room?name=${name}&room=${room}&selected=join`}>
            <button type="submit">Join Room</button>
          </Link>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}&selected=create`}>
            <button type="submit">Create Room</button>
          </Link>
        </div>

        <div className = "RoomList">
          <h2>Room-List</h2>
          { rooms ? 
          <h3>
                    { [...rooms].map(({ room }) => (
                    <div key={room}>
                        {room}
                    </div>
                    ))}
          </h3>
          : null
          }
        </div>
      </div>
      </>
    )
}


export default React.memo(Join);
