// const { addUser, removeUser, getUsersInRoom  }= require('./room');

const {findRoom, addRoom,removeRoom} = require('./room');


test("addRoom",()=>{
    expect(addRoom({name:"kim",room:"room1"})).toEqual({roomInfo:{name:"kim",room:"room1"}});

    addRoom({name:"park",room:"room2"})
    expect(addRoom({name:"lee",room:"room2"})).toEqual({ error: `room2 is taken. Please use other room.`});
})

test("findRoom",()=>{
    addRoom({name:"choi",room:"room3"})
    expect(findRoom("room3")).toEqual({roomInfo : {name:"choi",room:"room3"}});

    expect(findRoom("noroom")).toEqual({error: `noroom is not exist. Please create noroom room.`})
})


test("removeRoom",()=>{
    addRoom({name:"choi",room:"room4"});
    expect(removeRoom("room4")).toEqual({name:"choi",room:"room4"});
})
