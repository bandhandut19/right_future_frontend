import React from "react";
// import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetBoosterIncomeHistoryQuery } from "../../../Services/earningApi";
// import BoosterIncomeTable from "./Table/BoosterIncomeTable";
import Loading from "../../../components/Loading/Loading";
import CardLayout from "../../../components/CardLayout";
const BoosterIncome = () => {
  const { data, isLoading } = useGetAllWalletQuery();
  const { data: BoosterIncomeHistory, isLoading: isLoadingBoosterIncome } =
    useGetBoosterIncomeHistoryQuery();

  if (isLoadingBoosterIncome || isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="User_autopool_page_wrapper">
        <CardLayout className="User_autopool_dash_content card_row">
          <div className="Autopool_dash_content card_row">
            <UserIncomeCard
              cardName="Booster Income"
              cardValue={`$${
                data?.booster_income ? data?.booster_income : "0"
              }`}
              icon={roiIncomeIcon}
              bgColor="#38cab3"
              linkText="view details"
              cardBgColor="#fe9f43"
            />
          </div>
          <div className="table_container">
            {BoosterIncomeHistory?.boosterData?.length > 0
              ? BoosterIncomeHistory?.boosterData?.map((bt, i) => (
                  <Table
                    data={bt?.booster}
                    key={i + 1}
                    name={`Booster ${i + 1}`}
                  />
                ))
              : ""}
          </div>
        </CardLayout>
      </div>
    </>
  );
};

export default BoosterIncome;

const Table = ({ data, name }) => {
  // console.log(data);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="main">{name}</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="First Name">Level 01</td>
            <td data-column="Last Name">
              ${data[0]?.level1 ? data[0]?.level1 : "0"}
            </td>
          </tr>
          {/* <tr>
            <td data-column="First Name">Level 02</td>
            <td data-column="Last Name">
              ${data[1]?.level2 ? data[1]?.level2 : "0"}
            </td>
          </tr> */}
          <tr>
            <td data-column="First Name">Total Balance</td>
            {/* <td data-column="Last Name">
              $
              {data[0]?.level1 && data[1]?.level2
                ? data[0]?.level1 + data[1]?.level2
                : data[0]?.level1
                ? data[0]?.level1
                : "0"}
            </td> */}
            <td data-column="Last Name">
              ${data[0]?.level1 ? data[0]?.level1 : "0"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
