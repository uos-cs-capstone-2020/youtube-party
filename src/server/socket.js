const SocketIo = require('socket.io');

const {findRoom, addRoom, removeRoom  ,getRooms  }= require('./room');

module.exports = (server)=>{
    const io = SocketIo(server,{path:'/socket.io',});
    //app.set('io',io);

    io.on('connection',(socket)=>{ 
        
        socket.on('joinLobby',()=>{ // user 가 로비페이지 들어오면
            socket.join("Lobby");
            socket.emit('rooms',getRooms());// 존재하는 방 목록 전달.
        })

        socket.on('joinRoom',({name,room,selected},callback)=>{ // user가 Room 페이지 들어오면
            socket.leave("Lobby");            
            const {error , roomInfo} = selected === "create" ? addRoom({name,room}) : findRoom(room);// 위랑 통합 
            if(error) {return callback(error);}


            socket.join(room); // join room 
            if(selected === 'create'&& roomInfo){
                io.to("Lobby").emit('newRoom',({name:roomInfo.name,room:roomInfo.room})); // 새로운 방 생성 알리기
            }

            socket.on('oldUser',({name,id,to})=>{
                io.to(to).emit('oldUser',({name,id}));// 특정사용자에게 정보 보내주기
            })

            socket.broadcast.to(room).emit('newUser',({name , id : socket.id }))// 나를 제외한 방의 모두에게 브로드케스트
            socket.on('disconnect',()=>{
               
                socket.leave(room) // leave room
                const currentRoom = socket.adapter.rooms[room]; // # of remaining users
                const userCount = currentRoom ? currentRoom.length : 0;

                if(userCount === 0){
                    removeRoom(room);
                    io.to("Lobby").emit('removeRoom',({name,room}));
                }
                else{
                    //socket.to(room).emit('message',{
                    //    user:'admin',
                     //   text:`${name} exit`
                    //});
                }
                io.to(room).emit('exitUser',({name: name , id : socket.id }));// 방에 있는 모두에게  나간다고 알림.
            })

            socket.on('leaveRoom',()=>{
                socket.leave(room) // leave room
                const currentRoom = socket.adapter.rooms[room]; // # of remaining users
                const userCount = currentRoom ? currentRoom.length : 0;

                if(userCount === 0){
                    removeRoom(room);
                    io.to("Lobby").emit('removeRoom',({name,room}));
                }
                else{
                    //socket.to(room).emit('message',{
                    //    user:'admin',
                     //   text:`${name} exit`
                    //});
                }
                io.to(room).emit('exitUser',({name: name , id : socket.id }));// 방에 있는 모두에게  나간다고 알림.
            })
            callback();
        })

    })
}
