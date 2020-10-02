const express = require("express");

const app = express();
const port = 3001;

app.get("/user", (req, res) => {
  const data = {
    id: "4321",
    username: "youtubeParty",
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
