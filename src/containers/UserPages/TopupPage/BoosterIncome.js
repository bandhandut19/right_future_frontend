import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import { Notification } from "../../../components/ToastNotification";
import { boosterTopupValidate } from "../../../components/Validation/vaildate";
import { useGetLoginUserQuery } from "../../../Services/userApi";
import {
  useAddBoosterTopupMutation,
  useGetAllWalletQuery,
  useGetCurrentBoostAmountQuery,
} from "../../../Services/walletApi";

const BoosterIncome = () => {
  const { data: allWalletInfo } = useGetAllWalletQuery();
  const { data: CurrentBoostAmount } = useGetCurrentBoostAmountQuery();
  const { data: userData } = useGetLoginUserQuery();
  const [formErrors, setFormErrors] = useState({}); // form errors
  // const [showTrxField, setShowTrxField] = useState(false);
  const [data, setData] = useState({
    user_id: userData?.data?.user_id,
    packages: "",
    // trx_password: "",
  });
  // // error
  useEffect(() => {
    setFormErrors(boosterTopupValidate(data));
  }, [data]);
  const [addBooterTopup, { error, data: fundData, isLoading }] =
    useAddBoosterTopupMutation();
  useEffect(() => {
    if (fundData?.message) {
      Notification(fundData?.message, "success");
      setData({
        user_id: "",
        packages: "",
        trx_password: "",
      });
      // setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, fundData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      // setShowTrxField(false);
    } else {
      // if (!data.trx_password) {
      //   Notification("Transaction password is required", "error");
      //   setShowTrxField(true);
      // } else {
        const dataU = {
          ...data,
          user_id: userData?.data?.user_id.toUpperCase(),
        };
        if (dataU.packages < 0) {
          Notification("Negative amount is not allow", "error");
        } else {
          await addBooterTopup(dataU);
        }
      // }
    }
  };

  useEffect(() => {
    setData({ ...data, packages: 10 });
  }, [CurrentBoostAmount]);

  // const trx = parseFloat(allWalletInfo?.total_deposite);
  const total_amount =
  parseFloat(allWalletInfo?.total_deposite) +
    parseFloat(allWalletInfo?.total_income);
  return (
    <div className="rf_topupaccount_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_topupaccount_form_card"
      >
        <div className="rf_section_title">
          <h2>Booster Upgrade</h2>
          <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance">
              <p>
                USDT:{" "}
                {`$${total_amount ? parseFloat(total_amount)?.toFixed(2) : "0"}`}
              </p>
            </div>
          </div>
        </div>
        <div className="rf_topupaccount_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="user id"
                type="text"
                name="user_id"
                value={data.user_id}
                placeholder="Enter your user id"
                // onChange={(e) =>
                //   setData({ ...data, user_id: e.target.value })
                // }
                className="input_field"
                inputGroupClass="left"
                isRequired={true}
              />
              <Input
                label="packages"
                type="number"
                name="packages"
                value={data.packages}
                placeholder="Enter your amopackagesunt"
                // onChange={(e) => setData({ ...data, amount: e.target.value })}
                className="input_field"
                inputGroupClass="right amount_field"
                isRequired={true}
              />
            </div>
            {/* {showTrxField && (
              <div className="form_group">
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
                  inputGroupClass="left"
                  isRequired={true}
                />
                <Input
                  label=""
                  type="text"
                  name=""
                  placeholder=""
                  className="input_field"
                  inputGroupClass="right"
                  isRequired={false}
                  disabled={true}
                  style={{ display: "none" }}
                />
              </div>
            )} */}
            <Button type="submit" className="submit_btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default BoosterIncome;
