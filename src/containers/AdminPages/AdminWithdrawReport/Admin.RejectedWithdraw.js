import React, { useEffect, useRef, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import Modal from "../../../components/Modal";
import { Notification } from "../../../components/ToastNotification";
import { useClickOutside } from "../../../hooks/useClickOutside";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useCanceledWithdrawHistoryQuery } from "../../../Services/withdrawApi";
import RejectWithdrawTable from "./table/rejectWithdrawTable";

const RejectedWithdraw = () => {
  const { data, isLoading } = useCanceledWithdrawHistoryQuery();

  /*show Modal */
  const [details, setDetails] = useState({});
  const showDetails = (body) => {
    setDetails(body);
    setOpenModal(true);
  };
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));

  // wallet address copy
  const [text, setText] = useState({
    address: details.wallet_address,
  });
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text.address);
    Notification("Wallet address copied", "success");
  };
  useEffect(() => {
    setText({
      address: details.wallet_address,
    });
  }, [details.wallet_address]);

  const [filterData, setFilterData] = useState([]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SectionCommonTable
        wrapperClassName="rejectedwithdraw_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle={`Rejected Withdraw History (${
          data?.allWithdraw?.length > 0 ? data?.allWithdraw?.length : "0"
        })`}
        data={data?.allWithdraw}
        setFilterData={setFilterData}
        table={
          <RejectWithdrawTable
            data={
              filterData?.allWithdraw?.length > 0
                ? filterData
                : data?.allWithdraw
            }
            showDetails={showDetails}
          />
        }
      />
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalTitle="Transaction Details"
        modalRef={modalRef}
      >
        <div className="rf_commol_modal_field">
          <div className="transaction_details">
            <div className="group">
            <p>
                <strong>Name:</strong> <span>{details.user}</span>
              </p>
              <p>
                <strong>User Id:</strong> <span>{details.user_id}</span>
              </p>
              <p>
                <strong>Sponsor Id:</strong> <span>{details.sponsor_id}</span>
              </p>
              <p>
                <strong>Transfer Via:</strong>{" "}
                <span
                  style={{
                    backgroundColor: "rgba(255,189,90,.2)",
                    color: "#ffc107",
                  }}
                >
                  Admin
                </span>
              </p>
            </div>
            <div className="group">
              <p>
                <strong>Date:</strong>{" "}
                <span>{new Date(details?.date)?.toDateString()}</span>
              </p>
              <p>
                <strong>Time:</strong> <span>{details?.time}&nbsp;(IST)</span>
              </p>
            </div>
            <div className="group">
              <p>
                <strong>Request Amount:</strong>{" "}
                <span>${details?.request_amount}</span>
              </p>
              <p>
                <strong>After Charge:</strong>{" "}
                <span>${details?.amount_after_charge}</span>
              </p>
              <p>
                <strong>Current Balance:</strong>{" "}
                <span>${details?.current_amount}</span>
              </p>
              <p>
                <strong>Wallet (USDT):</strong>{" "}
                <span onClick={copyToClipboard} title="Copy to clipboard">
                  {details.trx_address}
                </span>
              </p>
            </div>
            <div className="group">
              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    textTransform: "capitalize",
                    backgroundColor:
                      details.status === "pending"
                        ? "rgba(255,189,90,.2)"
                        : details.status === "success"
                        ? "rgba(28,213,174,.2)"
                        : "rgba(247,79,117,.2)",
                    color:
                      details.status === "pending"
                        ? "#ffc107"
                        : details.status === "success"
                        ? "#38cab3"
                        : "#f74f75",
                  }}
                >
                  {details.status}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RejectedWithdraw;
