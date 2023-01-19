import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeputy, loadDeputyList } from "./store/deputy";
import { nanoid } from "nanoid";
import { getRule, loadRuleList } from "./store/rule";
import { getRegion, getRegionById, loadRegion } from "./store/region";
import SelectRegion from "./components/selectRegion";

function App() {
  const dispatch = useDispatch();
  const [regionDeputiesList, setRegionDeputiesList] = useState();
  const [deputyDisabled, setDeputyDisabled] = useState(true)
  const rule = useSelector(getRule());
  const deputy = useSelector(getDeputy());
  const region = useSelector(getRegion());

  const handleSelectRegion = ({ target }) => {
    const selectedRegion = region.find(
      (reg) => reg.id === Number(target.value)
    );
    const regionDeputies = deputy.filter(
      (dep) => dep.region.includes(selectedRegion.name) 
    );
    setRegionDeputiesList(regionDeputies);
    setDeputyDisabled(false)
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

      {region && <SelectRegion onChange={handleSelectRegion} />}

      {region && (
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Депутаты
          </label>
          <select className="form-select" id="validationCustom05" required disabled={deputyDisabled}>
            <option selected disabled value="">
              Выберите депутата...
            </option>
            {regionDeputiesList &&
              regionDeputiesList.map((dep) => {
                return (
                  <option key={dep.id} value={dep.id}>
                    {dep.name}
                  </option>
                );
              })}
          </select>
        </div>
      )}
    </>
  );
}
export default App;
