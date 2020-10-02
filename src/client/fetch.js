import React, { useState } from "react";

function Data() {
  const [data, setData] = useState({});

  fetch("/user")
    .then((res) => res.json())
    .then(
      (data) => setData(data),
      () => {
        console.log(`data read: ${data}`);
      }
    );

  return (
    <div id="main">
      Here are data we have collected.
      <br />
      {data.id},{data.username}
    </div>
  );
}

export default Data;
