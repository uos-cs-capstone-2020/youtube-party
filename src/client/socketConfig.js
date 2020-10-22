import io from "socket.io-client"

const socket = io('/',{path:'/socket.io'},{transports: ['websocket']});

export default socket;
