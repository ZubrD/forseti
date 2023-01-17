import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeputy, loadDeputyList } from "./store/deputy";
import { nanoid } from "nanoid";
import { getRule, loadRuleList } from "./store/rule";
import { getRegion, loadRegion } from "./store/region";

function App() {
  const dispatch = useDispatch();
  const rule = useSelector(getRule());
  const deputy = useSelector(getDeputy());
  const region = useSelector(getRegion());

  useEffect(() => {
    dispatch(loadDeputyList());
    dispatch(loadRuleList());
    dispatch(loadRegion());
  }, []);

  return (
    <div>
      {rule && (
        <ul>
          {rule.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}

      {deputy && (
        <ul>
          {deputy.map((item) => {
            return <li key={nanoid()}>{item.name}</li>;
          })}
        </ul>
      )}

      {region && (
        <ul>
          {region.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default App;
