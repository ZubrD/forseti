import React from "react";

const SelectDeputy = ({deputiesList, disabledStatus}) => {
  return (
    <div className="col-md-3">
      <label htmlFor="validationCustom05" className="form-label">
        Депутаты
      </label>
      <select
        className="form-select"
        id="validationCustom05"
        required
        disabled={disabledStatus}
      >
        <option selected disabled value="">
          Выберите депутата...
        </option>
        {deputiesList &&
          deputiesList.map((dep) => {
            return (
              <option key={dep.id} value={dep.id}>
                {dep.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectDeputy;
