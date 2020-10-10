import React, {useState,useEffect} from 'react'
import queryString from 'query-string'
import io from "socket.io-client"
import { Redirect } from "react-router";

let socket;

function Chat({location}){
    const [name,setName] = useState("");
    const [room,setRoom] = useState("");
    const [users,setUsers] = useState("");
    const [error,setError] = useState(false);
    const ENDPOINT = 'http://localhost:3001'//server address




    useEffect(() => {
       const { name, room } = queryString.parse(location.search);

       socket = io.connect(ENDPOINT,{path:'/socket.io'})
       if(name){setName(name)};
       if(room){setRoom(room)};
       socket.emit('join',{name,room}, (err)=>{
           if(err){
               alert(err);
               setError(true);
           }
       })
    }, [ENDPOINT,location]);


    useEffect(() => {
        socket.on('roomData',({users})=>{
            setUsers(users);
        })
    }, [])

    const redirect = "/?room="+room;

    return (
        <div>
          {error && <Redirect to={redirect}/> }
          {users ? (
            <div>
                <div>
                    Youtube Party
                </div>
                <h1>Chat room - {room} </h1>
                <h2>Your name - {name} </h2>
                <div >
                <h2>User-list
                    {users.map(({ name }) => (
                    <div key={name}>
                        {name}
                    </div>
                    ))}
                </h2>
                </div>
            </div>
            ) : null}
        </div>
    );

}


export default Chat;

