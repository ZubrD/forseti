import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeputy, loadDeputyList } from "./store/deputy";
import { nanoid } from "nanoid";
import { getRule, loadRuleList } from "./store/rule";
import { getRegion, loadRegion } from "./store/region";
import SelectRegion from "./components/selectRegion";
import SelectDeputy from "./components/selectDeputy";

function App() {
  const dispatch = useDispatch();
  const [regionDeputiesList, setRegionDeputiesList] = useState();
  const [deputyDisabled, setDeputyDisabled] = useState(true);
  const rule = useSelector(getRule());
  const deputy = useSelector(getDeputy());
  const region = useSelector(getRegion());

  const handleSelectRegion = ({ target }) => {
    const selectedRegion = region.find(
      (reg) => reg.id === Number(target.value)
    );
    const regionDeputies = deputy.filter((dep) =>
      dep.region.includes(selectedRegion.name)
    );
    setRegionDeputiesList(regionDeputies);
    setDeputyDisabled(false);
  };
  // console.log(deputy)

  useEffect(() => {
    dispatch(loadDeputyList());
    dispatch(loadRuleList());
    dispatch(loadRegion());
  }, []);

  return (
    <>
      {/* <div>
        {rule && (
          <ul>
            {rule.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        )}
      </div> */}
      <div className="d-flex flex-row">
        {region && <SelectRegion onChange={handleSelectRegion} />}
        {region && (
          <SelectDeputy
            deputiesList={regionDeputiesList}
            disabledStatus={deputyDisabled}
          />
        )}
      </div>
    </>
  );
}
export default App;
