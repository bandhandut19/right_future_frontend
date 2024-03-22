import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import { Notification } from "../../../components/ToastNotification";
import { autoTradeWithdrawValidate } from "../../../components/Validation/vaildate";
import {
  useAddOtpMutation,
  useGetLoginUserQuery,
} from "../../../Services/userApi";
import {
  useAddAutoTradeWithdrawFundsMutation,
  useGetAllWalletQuery,
} from "../../../Services/walletApi";

const AutoTradeWithdraw = () => {
  const { data: userData } = useGetLoginUserQuery();
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [OTPup, setOTPup] = useState(false);
  const [data, setData] = useState({
    withdrawalAmount: "",
    user_id: userData?.data?.user_id,
    trxAddress: userData?.data?.wallet_address,
    otpCode: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  /* send otp confirmation  */
  const [addOtp, { error: otpError, data: otpData }] = useAddOtpMutation();
  useEffect(() => {
    if (otpData?.message) {
      Notification(otpData?.message, "success");
      setOTPup(true);
    } else {
      Notification(otpError?.data?.message, "error");
      setOTPup(false);
    }
  }, [otpError, otpData]);

  // error
  useEffect(() => {
    setFormErrors(autoTradeWithdrawValidate(data));
  }, [data]);
  const [addWithdraw, { error, data: withdrawData, isLoading }] =
  useAddAutoTradeWithdrawFundsMutation();
  useEffect(() => {
    if (withdrawData?.message) {
      Notification(withdrawData?.message, "success");
      setData({
        withdrawalAmount: "",
        trxAddress: "",
        otpCode: "",
      });
      // setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, withdrawData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      // setShowTrxField(false);
    } else {
      if (!data.otpCode) {
        const otp = {
          user_id: data.user_id.toUpperCase(),
          trx_address: data.trxAddress,
          // trx_password: data.trx_password,
        };
        // console.log(otp)
        await addOtp(otp);
      } else {
        // const obj = {
        //   ...data,
        //   user_id: data.user_id.toUpperCase(),
        // };
        if (data.otpCode < 0) {
          Notification("Only Number Is Allowed On OTP", "error");
        } else {
          // setShowTrxField(true);
          await addWithdraw(data);
        }
      }
    }
  };
  /* otp resend */
  const OTP_resend = async () => {
    const otp = {
      user_id: data.user_id.toUpperCase(),
      trx_address: data?.trxAddress,
      trx_password: data?.trx_password,
    };
    await addOtp(otp);
  };

  const { data: allWalletInfo } = useGetAllWalletQuery();
  return (
    <div className="rf_topupaccount_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_topupaccount_form_card"
      >
        <div className="rf_section_title">
          <h2>Auto Trade Withdraw</h2>
          <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance rf_section_Trx_balance">
              <p>
                USDT: $
                {allWalletInfo?.autoTradeTotalIncome
                  ? parseFloat(allWalletInfo?.autoTradeTotalIncome).toFixed(2)
                  : "0"}
              </p>
            </div>
          </div>
        </div>
        <div className="rf_topupaccount_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="Amount"
                type="number"
                name="withdrawalAmount"
                value={data.withdrawalAmount}
                placeholder="Enter your amount"
                onChange={(e) => setData({ ...data, withdrawalAmount: e.target.value })}
                className="input_field"
                inputGroupClass="left amount_field"
                isRequired={true}
              />
              <Input
                label="USDT Address"
                type="text"
                name="trxAddress"
                value={data.trxAddress}
                placeholder="Enter your USDT address"
                onChange={(e) =>
                  setData({ ...data, trxAddress: e.target.value })
                }
                className="input_field"
                inputGroupClass="right"
                isRequired={true}
                disabled={true}
                style={{ cursor: "no-drop" }}
              />
            </div>
            {OTPup && (
              <div className="form_group form_group_OTP">
                <Input
                  label="OTP"
                  type="number"
                  name="otpCode"
                  placeholder="Enter OTP"
                  onChange={handleChange}
                  className="OTP_input_field input_field"
                  inputGroupClass="left"
                  isRequired={true}
                />
                <Button
                  type="button"
                  className="OTP_resend_btn"
                  onClick={() => OTP_resend()}
                >
                  Resend OTP
                </Button>
              </div>
            )}
            <Button type="submit" className="submit_btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Withdraw"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default AutoTradeWithdraw;
