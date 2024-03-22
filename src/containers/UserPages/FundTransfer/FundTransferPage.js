import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
// import ScreenShot from "../../../components/ScreensShot/ScreenShot";
import { Notification } from "../../../components/ToastNotification";
import { fundTransferValidate } from "../../../components/Validation/vaildate";
import {
  useGetLoginUserQuery,
  useGetValidateSponsorIdQuery,
} from "../../../Services/userApi";
import {
  useGetAllWalletQuery,
  useTransferFundMutation,
} from "../../../Services/walletApi";

const FundTransferPage = () => {
  const { data: allWalletInfo } = useGetAllWalletQuery();
  console.log("SELF INFO", allWalletInfo)

  const [sponError, setSponError] = useState("");
  const [sponsorName, setSponsorName] = useState("");

  const { data: userData } = useGetLoginUserQuery();
  console.log("Login data", userData?.data?.user_id)
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [showTrxField, setShowTrxField] = useState(false);
  const [data, setData] = useState({
    receiver_id: "",
    confirm_receiver_id: "",
    confirm_receiver_name: sponsorName,
    amount: "",
    trx_password: "",
  });

  /* user name validation */
  const { data: sponsoridData, error: sponsoridError } =
    useGetValidateSponsorIdQuery(data.receiver_id?.toUpperCase());
  useEffect(() => {
    if (sponsoridData?.message) {
      setSponError(sponsoridData?.message);
      setSponsorName(sponsoridData?.sponsor_name);
    }
    if (sponsoridError?.data?.message) {
      setSponError(sponsoridError?.data?.message);
      setSponsorName("");
    }
  }, [
    sponsoridError?.data?.message,
    sponsoridData?.message,
    sponsoridData?.sponsor_name,
  ]);

  // // error
  useEffect(() => {
    setFormErrors(fundTransferValidate(data));
  }, [data]);
  const [addtransferFund, { error, data: fundData, isLoading }] =
    useTransferFundMutation();
  useEffect(() => {
    if (fundData?.message) {
      Notification(fundData?.message, "success");
      setData({
        receiver_id: "",
        amount: "",
        trx_password: "",
      });
      setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, fundData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      setShowTrxField(false);
    } else if (userData?.data?.user_id === data?.receiver_id?.toUpperCase()) {
      Notification("You cannot transfer fund in your account", "error");
      setShowTrxField(false);
    } else {
      if (!data.trx_password) {
        Notification("Transaction password is required", "error");
        setShowTrxField(true);
      } else {
        const dataU = {
          ...data,
          user_id: userData?.data?.user_id,
          receiver_id: data.receiver_id?.toUpperCase(),
        };
        if (dataU.amount < 0) {
          Notification("Negative amount is not allow", "error");
        } else {
          // console.log(dataU);
          await addtransferFund(dataU);
        }
      }
    }
  };
  // const trx = parseFloat(allWalletInfo?.total_deposite);
  const total_amount =
    parseFloat(allWalletInfo?.total_deposite) +
    parseFloat(allWalletInfo?.total_income);
  // const trx_amount = (total_amount * 17)?.toFixed(2);
  return (
    <div className="rf_topupaccount_page_wrapper">
      {" "}
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_topupaccount_form_card"
      >
        <div className="rf_section_title">
          <h2>Fund Transfer</h2>
          <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance">
              <p>
                USDT:{" "}
                {`$${
                  total_amount ? parseFloat(total_amount)?.toFixed(2) : "0"
                }`}
              </p>
            </div>
          </div>
        </div>
        <div className="rf_topupaccount_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <div className="special_receiver_name">
                <Input
                  label="Receiver user id"
                  type="text"
                  name="receiver_id"
                  value={data.receiver_id}
                  placeholder="Enter your receiver user id"
                  onChange={(e) =>
                    setData({ ...data, receiver_id: e.target.value })
                  }
                  className="input_field"
                  inputGroupClass="left"
                  isRequired={true}
                />
                {!sponError.includes("Not Found") && (
                  <p
                    style={{
                      color: !sponError.includes("Invalid") ? "green" : "red",
                      fontSize: "13px",
                    }}
                  >
                    {!sponError.includes("Invalid")
                      ? "valid user id"
                      : "Invalid user id"}
                  </p>
                )}
              </div>
              <div className="special_receiver_name">
                <Input
                  label="Confirm Receiver Full Name"
                  type="text"
                  name="confirm_receiver_id"
                  // value={data.confirm_receiver_id}
                  placeholder="Receiver Full Name"
                  // onChange={(e) =>
                  //   setData({ ...data, confirm_receiver_id: e.target.value })
                  // }
                  className="input_field"
                  inputGroupClass="right"
                  // error={formErrors.confirm_receiver_id}
                  isRequired={true}
                  value={sponsorName}
                  disabled={true}
                />
              </div>
            </div>
            <div className="form_group">
              <Input
                label="Amount"
                type="number"
                name="amount"
                value={data.amount}
                placeholder="Enter your amount"
                onChange={(e) => setData({ ...data, amount: e.target.value })}
                className="input_field"
                inputGroupClass="left amount_field"
                isRequired={true}
              />
              <Input
                label="Your Transaction Password"
                type="text"
                name="trx_password"
                value={data.trx_password}
                placeholder="Enter your transaction password"
                onChange={(e) =>
                  setData({ ...data, trx_password: e.target.value })
                }
                className="input_field"
                inputGroupClass="right"
                isRequired={true}
              />
            </div>
            <Button type="submit" className="submit_btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Fund Transfer"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default FundTransferPage;
