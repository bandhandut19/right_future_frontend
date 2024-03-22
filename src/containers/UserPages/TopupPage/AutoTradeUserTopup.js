import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Notification } from "../../../components/ToastNotification";
import { autoTradeUpgradeValidate } from "../../../components/Validation/vaildate";
import {
  useGetAllWalletQuery,
} from "../../../Services/walletApi";
import { useAutoTradeFriendlyTopupMutation } from "../../../Services/topupApi";

const selectOption = ["Package 50$", "Package 100$", "Package 200$", "Package 300$", "Package 500$", "Package 1000$", "Package 2000$", "Package 5000$"];

const AutoTradeUserTopup = () => {
  const { data: allWalletInfo } = useGetAllWalletQuery();
  const [showTrxField, setShowTrxField] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [data, setData] = useState({
    userId: "",
    packages: "",
    trxPassword: "",
  });
  // error
  useEffect(() => {
    setFormErrors(autoTradeUpgradeValidate(data));
  }, [data]);
  // add topup
  const [addTopup, { data: topupData, error, isLoading }] = useAutoTradeFriendlyTopupMutation();

  useEffect(() => {
    if (topupData?.message) {
      Notification(topupData?.message, "success");
      setData({
        userId: "",
        packages: "",
        trxPassword: "",
      });
      setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, topupData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      setShowTrxField(false);
    } else {
      if (!data.trxPassword) {
        setShowTrxField(true);
        Notification("Transaction password is required", "error");
      } else {
        setShowTrxField(true);
        const topData = {
          ...data,
          packages: parseInt(data?.packages.split(" ")[1]),
          userId: data.userId?.toUpperCase(),
        };
        // console.log("topData", topData)
        await addTopup(topData);
      }
    }
  };
  const total_amount = parseFloat(allWalletInfo?.total_deposite)
   +parseFloat(allWalletInfo?.total_income);

  return (
    <div className="rf_topupaccount_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_topupaccount_form_card"
      >
        <div className="rf_section_title">
          <h2>Auto Trade User Topup</h2>
          <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance">
              <p>
                USD:{" "}
                {`$${total_amount ? parseFloat(total_amount).toFixed(2) : "0"}`}
              </p>
            </div>
          </div>
        </div>
        <div className="rf_topupaccount_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="User ID"
                type="text"
                name="userId"
                placeholder="Enter your user id"
                value={data.userId}
                onChange={(e) => setData({ ...data, userId: e.target.value })}
                className="input_field"
                inputGroupClass="left"
                isRequired={true}
              />
              <div className="package">
                <Select
                  label="Package"
                  className="select_field"
                  value={data.packages}
                  name="packages"
                  onChange={(e) =>
                    setData({
                      ...data,
                      packages: e.target.value,
                    })
                  }
                  options={selectOption}
                  isRequired={true}
                />
              </div>
            </div>
            {showTrxField && (
              <div className="form_group">
                <Input
                  label="Transaction Password"
                  type="text"
                  name="trxPassword"
                  value={data.trxPassword}
                  placeholder="Enter your transaction password"
                  onChange={(e) =>
                    setData({ ...data, trxPassword: e.target.value })
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
            )}
            {
              <Button type="submit" className="submit_btn" disabled={isLoading}>
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            }
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default AutoTradeUserTopup;
