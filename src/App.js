import React, { useState, useEffect } from "react";

function App() {
  const [deputies, setDeputy] = useState(false);
  useEffect(() => {
    getDeputy();
  }, []);

  function getDeputy() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setDeputy(data);
      });
  }
  return <div>{deputies ? deputies : "There is no deputy data available"}</div>;
}
export default App;
