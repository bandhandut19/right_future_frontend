import React, { useState, useRef } from "react";
import Modal from "../../../components/Modal";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useGetRewardTransferHistoryAdminQuery } from "../../../Services/walletApi";
import BonanzaRewardIncomeTable from "./Table/BonanzaRewardIncomeTable";
const BonanzaRewardIncome = () => {
  const { data: RewardTransferHistory } =
    useGetRewardTransferHistoryAdminQuery();

  const [details, setDetails] = useState({});
  const showDetails = (body) => {
    setDetails(body);
    setOpenModal(true);
  };
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));
  const [filterData, setFilterData] = useState([]);

  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          sectionTableTitle={`Bonanza Income (${RewardTransferHistory?.reward?.length})`}
          cardStyle={{ backgroundColor: "#fff" }}
          table={
            <BonanzaRewardIncomeTable
              data={RewardTransferHistory?.reward}
              showMessage={showDetails}
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
            <p>{details?.remark}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BonanzaRewardIncome;
