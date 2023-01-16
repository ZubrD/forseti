import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadDeputyList } from "./store/deputy";
import { nanoid } from "nanoid";


function App() {
  const dispatch = useDispatch();
  const [deputies, setDeputy] = useState(false);
  const [newDep, setNewdep] = useState();
  useEffect(() => {
    getDeputy();
    dispatch(loadDeputyList());
  }, []);

  function getDeputy() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const newData = JSON.parse(data);
        setDeputy(data);
        setNewdep(newData);
      });
  }
  return (
    <div>
      {newDep&&
      <ul>
        {newDep.map(item=>{
          return <li key={nanoid()}>{item.name}</li>
        })}
      </ul>
      }
      
      {deputies ? deputies : "There is no deputy data available"}
    </div>
  );
}
export default App;
