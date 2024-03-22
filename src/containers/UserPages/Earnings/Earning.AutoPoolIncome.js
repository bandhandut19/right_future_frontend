import React from "react";
import CardLayout from "../../../components/CardLayout";
// import { useGetLoginUserQuery } from "../../../Services/userApi";
import {
  useGetAllWalletQuery,
  useGetAutoPoolHistoryQuery,
} from "../../../Services/walletApi";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import AutoPoolIncome from "../../../assets/dashboardIcon/autopool_income.png";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import Loading from "../../../components/Loading/Loading";
import { AutoPoolTotalIncomeCal } from "../../../config/autoPoolTotalIncomeCalculate";

const AuotpoolIncome = () => {
  // const { data: userData } = useGetLoginUserQuery();
  const { data: walletData } = useGetAllWalletQuery();

  // console.log(userData?.data?._id);
  const { data: autoPoolData, isLoading } = useGetAutoPoolHistoryQuery();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="User_autopool_page_wrapper">
        <CardLayout className="User_autopool_dash_content card_row">
          <div className="Autopool_dash_content card_row">
            <UserIncomeCard
              cardName="Total Auto pool Income"
              cardValue={`$${
                AutoPoolTotalIncomeCal(autoPoolData)
                  ? AutoPoolTotalIncomeCal(autoPoolData)
                  : "0"
              }`}
              icon={AutoPoolIncome}
              bgColor="#38cab3"
              linkText="view details"
              cardBgColor="#fe9f43"
            />
            <UserIncomeCard
              cardName="Active Auto pool Income"
              cardValue={`$${
                walletData?.autopool_income
                  ? parseFloat(walletData?.autopool_income).toFixed(2)
                  : "0"
              }`}
              icon={roiIncomeIcon}
              bgColor="#F49D1A"
              linkText="view details"
              cardBgColor="#28c66f"
            />
          </div>
          <div className="table_container">
            {
              Object.entries(autoPoolData?.autoPoolData).map((autoPDt,i)=>(
                <Table
                data={autoPDt[1]}
                // name={`${autoPDt[0]} ${i+1}`}
                name={`Autopool ${i+1}`}
              />
              ))
              
            }
            {/* {autoPoolData?.autoPoolData?.firstautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.firstautopool}
                name={"Autopool 1"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.secondautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.secondautopool}
                name={"Autopool 2"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.thirdautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.thirdautopool}
                name={"Autopool 3"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.fourthautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.fourthautopool}
                name={"Autopool 4"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.fifthautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.fifthautopool}
                name={"Autopool 5"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.VIautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.VIautopool}
                name={"Autopool 6"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.VIIautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.VIIautopool}
                name={"Autopool 7"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.VIIIautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.VIIIautopool}
                name={"Autopool 8"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.IXautopool?.autoPoolData?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.IXautopool}
                name={"Autopool 9"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.Xautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.Xautopool}
                name={"Autopool 10"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.XIautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.XIautopool}
                name={"Autopool 11"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.XIIautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.XIIautopool}
                name={"Autopool 12"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.XIIIautopool?.autoPoolData?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.XIIIautopool}
                name={"Autopool 13"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.XIVautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.XIVautopool}
                name={"Autopool 14"}
              />
            ) : (
              ""
            )}
            {autoPoolData?.autoPoolData?.XVautopool?.length > 0 ? (
              <Table
                data={autoPoolData?.autoPoolData?.XVautopool}
                name={"Autopool 15"}
              />
            ) : (
              ""
            )} */}
          </div>
        </CardLayout>
      </div>
    </>
  );
};
export default AuotpoolIncome;

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
              ${data[0]?.total ? data[0]?.total : "0"}
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Level 02</td>
            <td data-column="Last Name">
              ${data[1]?.total ? data[1]?.total : "0"}
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Total Balance</td>
            <td data-column="Last Name">
              $
              {data[0]?.total && data[1]?.total
                ? data[0]?.total + data[1]?.total
                : data[0]?.total
                ? data[0]?.total
                : "0"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// const autoPoolData = {
//   firstautopool: [{ total: 120 }, { total: 30 }],
//   secondautopool: [{ total: 20 }, { total: 32 }],
//   thirdautopool: [{ total: 142 }, { total: 452 }],
//   fourthautopool: [{ total: 452 }, { total: 2452 }],
//   fifthautopool: [{ total: 452 }, { total: 245 }],
//   VIautopool: [{ total: 2252 }, { total: 245 }],
//   VIIautopool: [{ total: 252 }, { total: 252 }],
//   VIIIautopool: [{ total: 252 }, { total: 252 }],
//   IXautopool: [{ total: 252 }, { total: 252 }],
//   Xautopool: [{ total: 252 }, { total: 252 }],
//   XIIautopool: [{ total: 252 }, { total: 252 }],
//   XIIIautopool: [{ total: 252 }, { total: 252 }],
//   XIVautopool: [{ total: 252 }, { total: 252 }],
//   XVautopool: [{ total: 252 }, { total: 252 }],
// };
