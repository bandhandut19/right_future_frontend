import React from "react";

const AutopoolControllerCard = ({ st, handleChangeIncomeType }) => {
  return (
    <>
      <div className="autopool_controller">
        <div className="autopool_status">
          <h4>{st?.autopool_name}</h4>
          <p>
            Auto Pool Status is{" "}
            {st?.status ? (
              <span className="on">ON</span>
            ) : (
              <span className="off">OFF</span>
            )}
          </p>
        </div>
        <div className="">
          <div className="amount_type_container">
            <div className="amount_type">
              <span className="amount_type_label">ON</span>
              <label className="switch">
                <input
                  type="radio"
                  id={st?.autopool_name}
                  name={st?.autopool_name}
                  value={st?.autopool_name}
                  checked={st?.status === true ? true : false}
                  // checked={false}
                  onChange={handleChangeIncomeType}
                />
                <span className="slider"></span>
              </label>{" "}
            </div>
            <div className="amount_type">
              <span className="amount_type_label">OFF</span>
              <label className="switch">
                <input
                  type="radio"
                  id={st?.autopool_name}
                  name={st?.autopool_name}
                  value={st?.autopool_name}
                  checked={st?.status === false ? true : false}
                  // checked={true}
                  onChange={handleChangeIncomeType}
                />
                <span className="slider"></span>
              </label>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutopoolControllerCard;
