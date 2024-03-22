import React from "react";
import DataTable from "../../../../components/DataTable";

const BoosterControllerTable = ({ data, onCheckboxChange }) => {
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 100 },
    {
      id: "fullName",
      label: "Full Name",
      minWidth: 120,
    },
    {
      id: "check_condition",
      label: "Check Condition",
      minWidth: 80,
    },
  ];

  function createData(sn, user_id, fullName, check_condition) {
    return { sn, user_id, fullName, check_condition };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.user_id,
      d?.name,
      <label class="switch">
      <input
        type="checkbox"
        name="conOne"
        checked={d?.boosterController}
        onChange={(e)=>onCheckboxChange(e,"conOne", d?.user_id)}
      />
      <span class="slider round"></span>
    </label>
    )
  );

  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={10}
      tableHeight={440}
      className="common_table"
    />
  );
};

export default BoosterControllerTable;
