import React, { useEffect, useRef, useState } from "react";
// import Loading from "../../../components/Loading/Loading";
import { useClickOutside } from "../../../hooks/useClickOutside";
import Modal from "../../../components/Modal";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetGiftIncomeHistoryAdminQuery } from "../../../Services/earningApi";
import GiftIncomeTable from "./Table/GiftIncomeTable";
const GiftIncome = () => {
  const { data: GiftIncomeHistoryData } = useGetGiftIncomeHistoryAdminQuery();

  const [details, setDetails] = useState({});
  const showDetails = (body) => {
    setDetails(body);
    setOpenModal(true);
  };
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Gift Income"
          table={
            <GiftIncomeTable
              data={GiftIncomeHistoryData}
              showDetails={showDetails}
            />
          }
        />
      </div>
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
                <strong>User Name:</strong> <span>{details.name}</span>
              </p>
              {/* <p>
                <strong>Income From Id:</strong>{" "}
                <span>{details.income_from}</span>
              </p> */}
            </div>
            <div className="group">
              <p>
                <strong>Date:</strong>{" "}
                <span>{new Date(details?.updatedAt)?.toDateString()}</span>
              </p>
              <p>
                <strong>Time:</strong>{" "}
                <span>
                  {new Date(details?.updatedAt)?.toLocaleTimeString()}
                  &nbsp;(IST)
                </span>
              </p>
            </div>
            <div className="group">
              <p>
                <strong>Amount:</strong>{" "}
                <span>${parseFloat(details?.amount).toFixed(2)}</span>
              </p>
            </div>
            <div className="group">
              <p>
                <strong>Transaction Id:</strong>{" "}
                <span>{details?.transaction_id}</span>
              </p>
              <p>
                <strong>Income Type:</strong>{" "}
                <span>{details?.type} Income</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GiftIncome;
