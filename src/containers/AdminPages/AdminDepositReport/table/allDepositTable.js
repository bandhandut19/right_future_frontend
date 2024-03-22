import React from "react";
import DataTable from "../../../../components/DataTable";

const columns = [
  { id: "sr", label: "Sr.", minWidth: 20 },
  { id: "userId", label: "User ID", minWidth: 50 },
  {
    id: "name",
    label: "Name",
    minWidth: 100,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
  },
  // {
  //   id: "trx_amount",
  //   label: "Amount (USDT)",
  //   minWidth: 100,
  // },
  {
    id: "date",
    label: "Date",
    minWidth: 120,
  },
  {
    id: "image",
    label: "Transaction Proof",
    minWidth: 120,
  },
  {
    id: "transaction_id",
    label: "Transaction ID",
    minWidth: 100,
  },
  {
    id: "hash",
    label: "Hash",
    minWidth: 100,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 80,
  },
];

const AllDepositTable = ({
  data,
  showDetails,
  showImageDetails,
  statusChange,
}) => {
  function createData(
    sr,
    userId,
    name,
    amount,
    date,
    image,
    transaction_id,
    hash,
    action
  ) {
    return {
      sr,
      userId,
      name,
      amount,
      date,
      image,
      transaction_id,
      hash,
      action,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      d?.user_id,
      d?.name,
      "$" + parseInt(d?.amount)?.toFixed(3),
      // parseInt(d?.amount * 17)?.toFixed(3),
      new Date(d?.date).toDateString(),
      <span
        onClick={() => showImageDetails(d)}
        style={{
          userSelect: "none",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        <img style={{ width: "30px" ,height:"30px"}} src={d?.proof_pic?.avatar} alt=""></img>
      </span>,
      <span
        onClick={() => showDetails(d)}
        style={{
          userSelect: "none",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {d?.transaction_id}
      </span>,
      <>
        {d?.hash?.length > 0 ? (
          <a
            href={`https://tronscan.org/#/transaction/${d?.hash}`}
            target="_blank"
            rel="noreferrer"
            style={{
              userSelect: "none",
              cursor: "pointer",
              textDecoration: "underline",
              color: `var(--text-p-color)`
            }}
          >
            {d?.hash?.slice(0, 5) + "..." + d?.hash?.slice(d?.hash?.length - 5)}
          </a>
        ) : (
          "N/A"
        )}
      </>,
      <span>
        <select
          name="status"
          style={{
            border: "none",
            outline: "none",
            padding: "5px 8px",
            borderRadius: "5px",
            textTransform: "capitalize",
            backgroundColor:
              d.status === "pending"
                ? "rgba(255,189,90,.2)"
                : d.status === "success"
                ? "rgba(28,213,174,.2)"
                : "rgba(247,79,117,.2)",
            color:
              d.status === "pending"
                ? "#ffc107"
                : d.status === "success"
                ? "#38cab3"
                : "#f74f75",
          }}
          value={d.status}
          onChange={(e) => statusChange(e.target.value, d?.transaction_id)}
        >
          <option value="pending">pending</option>
          <option value="success">success</option>
          <option value="reject">reject</option>
        </select>
      </span>
    )
  );
  // console.log(data);
  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={6}
      tableHeight={440}
      className="common_table"
    />
  );
};

export default AllDepositTable;
