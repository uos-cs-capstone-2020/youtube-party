const express = require("express");

const webSocket = require('./socket')
const router = require('./router');

const app = express();
const port = 3001;


app.use("/api",router);


const server = app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

webSocket(server);

