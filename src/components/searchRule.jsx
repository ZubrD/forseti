import React from "react";

const SearchRule = ({ filteredRules, hightlight, onChange, onClick }) => {
  return (
    <>
      <div className="input-group mb-3 row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Закон"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={onChange}
            // value={searchRule}
          />
        </div>
      </div>
      <div
        className={"collapse row " + (filteredRules.length > 0 ? "show" : "")}
      >
        <div className="col-6">
          <div className="card card-body">
            {filteredRules &&
              filteredRules.map((rule) => {
                hightlight = !hightlight; // Для чередования выделения цветом результатов поиска
                return (
                  <div
                    className={hightlight ? "hightlight-search-result" : ""}
                    key={rule.id}
                    role="button"
                    onClick={() => onClick(rule.id)}
                  >
                    {rule.title}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchRule;
