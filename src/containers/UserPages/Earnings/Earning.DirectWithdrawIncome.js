import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import {
  useGetDirectFundTransferIncomeQuery,
  useGetDirectWithdrawIncomeQuery,
  useGetUserActivationIncomeQuery,
} from "../../../Services/earningApi";
import DirectWithdrawIncomeTable from "./Table/DirectWithdrawIncomeTable";
import Loading from "../../../components/Loading/Loading";
import UserTopupIncomeHistoryTable from "./Table/UserTopupIncomeHistoryTable";
const DirectWithdrawIncome = () => {
  const { data } = useGetAllWalletQuery();
  const { data: DirectWithdrawIncomeData, isLoading } = useGetDirectWithdrawIncomeQuery();
  const { data: UserActivationIncomeData } = useGetUserActivationIncomeQuery();
  console.log(UserActivationIncomeData)
  const { data: DirectFundTransferIncomeData } = useGetDirectFundTransferIncomeQuery();
  // const DirectFundTransferIncomeTotal = DirectFundTransferIncomeData?.reduce(
  //   (accumulator, object) => {
  //     return accumulator + parseFloat(object.amount);
  //   },
  //   0
  // );
  // const UserActivationIncomeDataTotal = UserActivationIncomeData?.reduce(
  //   (accumulator, object) => {
  //     return accumulator + parseFloat(object.amount);
  //   },
  //   0
  // );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Direct Withdraw Income"
            cardValue={`$${
              data?.direct_withdraw_income
                ? parseFloat(data?.direct_withdraw_income).toFixed(2)
                : "0"
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
          sectionTableTitle="Direct Withdraw Income"
          table={<DirectWithdrawIncomeTable data={DirectWithdrawIncomeData} />}
        />
      </div>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Fund Transfer Income"
            // cardValue={`$${
            //   DirectFundTransferIncomeTotal
            //     ? parseFloat(DirectFundTransferIncomeTotal).toFixed(2)
            //     : "0"
            // }`}
            cardValue={`$${
              data?.direct_fund_transfer_income
                ? parseFloat(data?.direct_fund_transfer_income).toFixed(2)
                : "0"
            }`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
            cardBgColor="#00d0e7"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Fund Transfer Income"
          table={
            <DirectWithdrawIncomeTable data={DirectFundTransferIncomeData} />
          }
        />
      </div>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="User's Topup Income"
            // cardValue={`$${
            //   UserActivationIncomeDataTotal
            //     ? parseFloat(UserActivationIncomeDataTotal).toFixed(2)
            //     : "0"
            // }`}
            cardValue={`$${
              data?.user_activation_income
                ? parseFloat(data?.user_activation_income).toFixed(2)
                : "0"
            }`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
            cardBgColor="#28c66f"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="User's Topup Income"
          table={<UserTopupIncomeHistoryTable data={UserActivationIncomeData} />}
        />
      </div>
    </>
  );
};

export default DirectWithdrawIncome;
