const { addUser, removeUser, getUsersInRoom  }= require('./room');




test("addUser",()=>{
    expect(addUser({id:"id1",name:"name1",room:"room1"})).toEqual({user:{id:"id1",name:"name1",room:"room1"}})
})


test("removeUser",()=>{
    addUser({id:"id2",name:"name2",room:"room2"});
    expect(removeUser("id2")).toEqual({id:"id2",name:"name2",room:"room2"})
})

test("getUsersInRoom",()=>{
    addUser({id:"id2",name:"name2",room:"room3"});
    addUser({id:"id3",name:"name3",room:"room3"});
    console.log(getUsersInRoom("room3"));
    expect(getUsersInRoom("room3")).toEqual([{id:"id2",name:"name2",room:"room3"},{id:"id3",name:"name3",room:"room3"}])
})