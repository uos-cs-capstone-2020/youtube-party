const SocketIo = require('socket.io');


const { addUser, removeUser, getUsersInRoom  }= require('./room');


module.exports = (server,app)=>{
    const io = SocketIo(server,{path:'/socket.io',});
    app.set('io',io);
    io.on('connection',(socket)=>{ 
        socket.on('join',({name,room},callback)=>{//get name and room

            console.log(name,room);
            const { error , user } = addUser({id:socket.id,name,room});
            if(error) return callback(error);

            socket.join(user.room); // join room 

            io.to(user.room).emit('roomData',{room: user.room, users: getUsersInRoom(user.room)});
            socket.on('disconnect',()=>{
                removeUser(socket.id);
                socket.leave(room) // leave room
                const currentRoom = socket.adapter.rooms[room]; // # of remaining users
                const userCount = currentRoom ? currentRoom.length : 0;
                if(userCount !== 0){
                    socket.to(room).emit('message',{
                        user:'admin',
                        text:`${name} exit`
                    });
                }
                io.to(user.room).emit('roomData',{room: user.room, users: getUsersInRoom(user.room)});
            })
            callback();
        })
    })
}