import React from "react";
import DataTable from "../../../../components/DataTable";

const BonanzaRewardIncomeTable = ({ data, showMessage }) => {
  const columns = [
    { id: "sr", label: "S.N", minWidth: 20 },
    {
      id: "receiver_id",
      label: "Transfer From",
      minWidth: 100,
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 100,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
    {
      id: "remark",
      label: "Remark",
      minWidth: 100,
    },

    {
      id: "transaction_id",
      label: "Transaction ID",
      minWidth: 80,
    },
  ];

  function createData(sr, receiver_id, amount, remark, date, transaction_id) {
    return {
      sr,
      receiver_id,
      amount,
      remark,
      date,
      transaction_id,
    };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.income_from,
      "$" + d?.amount,
      <span
        style={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => showMessage(d)}
      >
        {d?.remark?.length > 40
          ? d?.remark?.slice(0, 40 - 1) + "..."
          : d?.remark}
      </span>,
      new Date(d?.createdAt).toDateString(),
      d?.transaction_id,
    )
  );
  // console.log(data);
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

export default BonanzaRewardIncomeTable;
