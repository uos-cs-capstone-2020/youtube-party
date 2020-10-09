import React, { useState, useEffect } from "react";

function Data() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div id="main">
      Here are data we have collected.
      <br />
      {data.id},{data.username}
    </div>
  );
}

export default Data;
