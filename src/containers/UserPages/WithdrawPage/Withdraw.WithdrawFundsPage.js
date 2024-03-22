import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import { Notification } from "../../../components/ToastNotification";
import { withdrawAmountValidate } from "../../../components/Validation/vaildate";
import {
  useAddOtpMutation,
  useGetLoginUserQuery,
} from "../../../Services/userApi";
import {
  useAddWithdrawFundsMutation,
  useGetAllWalletQuery,
} from "../../../Services/walletApi";
import {
  getLocalStorage,
  savedLocalStorage,
} from "../../../utils/function/localStorage";
// import { useAddWithdrawFundsMutation } from "../../../Services/withdrawApi";

const WithdrawPage = () => {
  const { data: userData } = useGetLoginUserQuery();
  // const [showTrxField, setShowTrxField] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [OTPup, setOTPup] = useState(false);
  const [data, setData] = useState({
    amount: "",
    user_id: userData?.data?.user_id,
    trx_address: userData?.data?.wallet_address,
    trx_password: "",
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

  if (JSON.parse(getLocalStorage("otp_timer"))) {
    setTimeout(() => {
      // console.log(JSON.parse(getLocalStorage("otp_timer")));
    }, parseInt(JSON.parse(getLocalStorage("otp_timer"))) * 1000);
  }

  // error
  useEffect(() => {
    setFormErrors(withdrawAmountValidate(data));
  }, [data]);
  const [addWithdraw, { error, data: withdrawData, isLoading }] =
    useAddWithdrawFundsMutation();
  useEffect(() => {
    if (withdrawData?.message) {
      Notification(withdrawData?.message, "success");
      setData({
        amount: "",
        trx_password: "",
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
          trx_address: data.trx_address,
          // trx_password: data.trx_password,
        };
        // console.log(otp)
        await addOtp(otp);
        savedLocalStorage("otp_timer", 5000);
      } else {
        const obj = {
          ...data,
          user_id: data.user_id.toUpperCase(),
        };
        if (data.otpCode < 0) {
          Notification("Only Number Is Allowed On OTP", "error");
        } else {
          // setShowTrxField(true);
          await addWithdraw(obj);
        }
      }
      // if (!data.trx_password) {
      //   setShowTrxField(true);
      //   Notification("Transaction password is required", "error");
      // } else {

      // }
    }
  };
  /* otp resend */
  const OTP_resend = async () => {
    const otp = {
      user_id: data.user_id.toUpperCase(),
      trx_address: data?.trx_address,
      trx_password: data?.trx_password,
    };
    await addOtp(otp);
  };

  const { data: allWalletInfo } = useGetAllWalletQuery();
  // const trx = parseFloat(allWalletInfo?.total_income);
  // const trx_amount = (trx * 14.16)?.toFixed(3);
  return (
    <div className="rf_topupaccount_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_topupaccount_form_card"
      >
        <div className="rf_section_title">
          <h2>Withdraw</h2>
          <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance rf_section_Trx_balance">
              <p>
                USDT: $
                {allWalletInfo?.total_income
                  ? parseFloat(allWalletInfo?.total_income).toFixed(2)
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
                name="amount"
                value={data.amount}
                placeholder="Enter your amount"
                onChange={(e) => setData({ ...data, amount: e.target.value })}
                className="input_field"
                inputGroupClass="left amount_field"
                isRequired={true}
              />
              <Input
                label="USDT Address"
                type="text"
                name="trx_address"
                value={data.trx_address}
                placeholder="Enter your USDT address"
                onChange={(e) =>
                  setData({ ...data, trx_address: e.target.value })
                }
                className="input_field"
                inputGroupClass="right"
                isRequired={true}
                disabled={true}
                style={{ cursor: "no-drop" }}
              />
            </div>
            {/* {showTrxField && (
              <>
                <div className="form_group">
                  <Input
                    label="Transaction Password"
                    type="text"
                    name="trx_password"
                    value={data.trx_password}
                    placeholder="Enter your transaction password"
                    onChange={(e) =>
                      setData({ ...data, trx_password: e.target.value })
                    }
                    className="input_field"
                    inputGroupClass="left"
                    isRequired={true}
                  />
                  <Input
                    label=""
                    type="text"
                    name=""
                    className="input_field"
                    inputGroupClass="right"
                    disabled={true}
                    style={{ display: "none" }}
                  />
                </div>
                
              </>
            )} */}
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

export default WithdrawPage;
