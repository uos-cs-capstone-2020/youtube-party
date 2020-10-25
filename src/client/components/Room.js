import React, {useState,useEffect} from 'react';
import queryString from 'query-string';
import { Redirect } from "react-router";
import socket from "../socketConfig";

function Room({location}){
    const {name, room, selected} = queryString.parse(location.search);
    const [myName,] = useState(name.trim().toLowerCase());
    const [myRoom,] = useState(room.trim().toLowerCase());
    const [mySelect,] = useState(selected.trim().toLowerCase());
    const [users,setUsers] = useState(new Set());
    const [error,setError] = useState(false);
    const redirect = "/";
    useEffect(  () => {
        socket.on('connect',()=>{
            console.log(`${socket.id} connected`);
        })
        socket.emit('joinRoom',{name:myName,room: myRoom,selected: mySelect}, (err)=>{
            if(err){
                alert(err);
                setError(true);
                return ()=> socket.off();

            }else{
                setUsers(users=> new Set(users.add({name:myName,id:socket.id}))); //채팅방 참여후 유저목록 내이름 추가
                socket.on('newUser',(data)=>{// data = {name: "", id : " "}
                setUsers(users=> new Set(users.add(data)));// 새로운 유저정보 유저목록에 저장
                socket.emit('oldUser',({name:myName,id:socket.id,to:data.id})); // 새로운 유저에게 내 정보 알려주기
                 })

                socket.on('oldUser',(data)=>{// 기존유저가 자신의 정보 알려주면 저장하기
                    setUsers(users=> new Set(users.add(data)));// 새로운 유저정보 유저목록에 저장
                })
                socket.on('exitUser',(data)=>{//  방 나간 유저 목록에서 삭제하기
                    setUsers(users=>new Set([...users].filter(userInfo => userInfo.id !== data.id)))
                })
            }
        })
        return ()=> {socket.emit('leaveRoom'); socket.off(); };// 방정보 지우고 + 리스너 전부 끄기
    }, [myRoom,myName,mySelect]);


    return (
        <div>
          {error && <Redirect to={redirect}/> }
          { users.size ? (
            <div className="roomInfo">
                <h1>Room name - {myRoom} </h1>
                <h2>Your name - {myName} </h2>
                <div >
                <h2>User-list
                    {[...users].map(({ name,id }) => (
                    <div key={id}>
                        {name}({id})
                    </div>
                    ))}
                </h2>
                </div>
            </div>
            ) : null}
        </div>
    );

}


export default React.memo(Room);

