import React, { useRef, useState } from "react";
import Modal from "../../../components/Modal";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useClickOutside } from "../../../hooks/useClickOutside";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useRewardIncomeDataUserQuery } from "../../../Services/earningApi";
import BonanzaRewardIncomeTable from "./Table/BonanzaRewardIncomeTable";
import Loading from "../../../components/Loading/Loading";
const BonanzaRewardIncome = () => {
  const { data: walletData ,isLoading} = useGetAllWalletQuery();
  const { data: RewardIncomeData , isLoading:isLoadingReward} = useRewardIncomeDataUserQuery();
  const [details, setDetails] = useState({});
  const showDetails = (body) => {
    setDetails(body);
    setOpenModal(true);
    console.log(body);
  };
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));
  if(isLoading || isLoadingReward){
    return <Loading/>
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Bonanza Income"
            cardValue={`$${
              walletData?.reward_income ? walletData?.reward_income : "0"
            }`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
            cardBgColor="#fe9f43"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Bonanza Income"
          table={
            <BonanzaRewardIncomeTable
              data={RewardIncomeData}
              showMessage={showDetails}
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
              <p>{details?.remark}</p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default BonanzaRewardIncome;
