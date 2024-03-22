import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import Modal from "../../../components/Modal";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { Notification } from "../../../components/ToastNotification";
import { useClickOutside } from "../../../hooks/useClickOutside";
import {
  useAllDepositeHistoryQuery,
  useEditDepositStatusMutation,
} from "../../../Services/depositeApi";
import AllDepositTable from "./table/allDepositTable";

const AllTransaction = () => {
  const [details, setDetails] = useState({});
  const showDetails = (body) => {
    setDetails(body);
    setOpenModal(true);
  };
  const showImageDetails = (body) => {
    setDetails(body);
    setOpenModalForImage(true);
  };
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));
  const [openModalForImage, setOpenModalForImage] = useState(false);
  const modalImageRef = useRef(null);
  useClickOutside(modalImageRef, () => setOpenModalForImage(false));
  // get all deposit history
  const { data, isLoadingAllDepositHistory } = useAllDepositeHistoryQuery();
  // status change
  const [statusDepo, { data: statusData, error: statusError }] =
    useEditDepositStatusMutation();
  useEffect(() => {
    if (statusData?.message) {
      Notification(statusData?.message, "success");
    } else {
      Notification(statusError?.data?.message, "error");
    }
  }, [statusError, statusData]);
  const statusChange = async (status, id) => {
    const statusChanges = {
      transaction_id: id,
      status: status,
    };
    await statusDepo(statusChanges);
  };
  const [filterData, setFilterData] = useState([]);
  if (isLoadingAllDepositHistory) {
    return <Loading />;
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="allmember_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle={`All Deposit History (${
          data?.length > 0 ? data?.length : "0"
        })`}
        data={data}
        setFilterData={setFilterData}
        table={
          <AllDepositTable
            data={filterData.length > 0 ? filterData : data}
            showDetails={showDetails}
            showImageDetails={showImageDetails}
            statusChange={statusChange}
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
                <strong>User Id:</strong> <span>{details.user_id}</span>
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
                <strong>Date:</strong> <span>{details?.time?.date}</span>
              </p>
              <p>
                <strong>Time:</strong>{" "}
                <span>{details?.time?.time}&nbsp;(IST)</span>
              </p>
            </div>
            <div className="group">
              <p>
                <strong>Amount:</strong> <span>${details.amount}</span>
              </p>
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

      <Modal
        openModal={openModalForImage}
        setOpenModal={setOpenModalForImage}
        modalTitle="Transaction Proof Image"
        modalRef={modalImageRef}
      >
        <div className="rf_commol_modal_field">
          <div className="transaction_details" style={{ textAlign: "center" }}>
            <img
              style={{ width: "70%", margin: "20px auto" }}
              src={details?.proof_pic?.avatar}
              alt=""
            ></img>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AllTransaction;
