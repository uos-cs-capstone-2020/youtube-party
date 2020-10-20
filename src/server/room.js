const rooms=[];

const addRoom = ({name,room})=>{  // 방주인 , 방이름
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  if(!name || !room) return { error: 'Username and room are required.' };

  const existingRoom = rooms.find((roomInfo)=> roomInfo.room === room );
  
  if(existingRoom) return { error: `${room} is taken. Please use other room.`};
  
  const roomInfo = {name,room};
  rooms.push(roomInfo);

  return { roomInfo };// {roomInfo : {name: "" , room: ""} };
}


const findRoom = (room)=>{
  room = room.trim().toLowerCase();
  if(!room) return { error: 'Username and room are required.' };
  const roomInfo = rooms.find((roomInfo)=> roomInfo.room === room );
  if(!roomInfo) return { error: `${room} is not exist. Please create ${room} room.`};
  return { roomInfo };// {roomInfo : {name: "" , room: ""} };
}


const removeRoom = (room)=>{
  const idx = rooms.findIndex((roomInfo)=>roomInfo.room===room);
  if(idx!== -1)  return rooms.splice(idx,1)[0]; //삭제하고 삭제된 값 반환 {room: "" , name : ""};
}

const getRooms = ()=> rooms;
module.exports = {  findRoom, addRoom,removeRoom, getRooms };