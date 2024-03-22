import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import { Notification } from "../../../components/ToastNotification";
import { RewardTransferValidate } from "../../../components/Validation/vaildate";
import { useGetLoginUserQuery } from "../../../Services/userApi";
import {
  useAddBonanzaTransferMutation,
} from "../../../Services/walletApi";

const RewardTransfer = () => {
  const { data: userData } = useGetLoginUserQuery();
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [showTrxField, setShowTrxField] = useState(false);
  const [data, setData] = useState({
    receiver_id: "",
    confirm_receiver_id: "",
    amount: "",
    trx_password: "",
    remark:"",
  });
  // // error
  useEffect(() => {
    setFormErrors(RewardTransferValidate(data));
  }, [data]);
  const [AddBonanzaTransfer, { error, data: fundData, isLoading }] =
  useAddBonanzaTransferMutation();
  useEffect(() => {
    if (fundData?.message) {
      Notification(fundData?.message, "success");
      setData({
        receiver_id: "",
        amount: "",
        trx_password: "",
        remark: "",
        // document.getElementById("remark")
      });
      setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, fundData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("chicked");
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      setShowTrxField(false);
    } else {
      if (!data.trx_password) {
        Notification("Transaction password is required", "error");
        setShowTrxField(true);
      } else {
        const dataU = {
          ...data,
          user_id: data.receiver_id?.toUpperCase(),
        };
        if (dataU.amount < 0) {
          Notification("Negative amount is not allow", "error");
        } else {
          // console.log(dataU);
          await AddBonanzaTransfer(dataU);
        }
      }
    }
  };
  return (
    <div className="rf_reward_page_wrapper">
      {" "}
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_reward_form_card"
      >
        <div className="rf_section_title">
          <h2>Bonanza Transfer</h2>
        </div>
        <div className="rf_reward_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="Receiver user id"
                type="text"
                name="receiver_id"
                value={data?.receiver_id}
                placeholder="Enter your receiver user id"
                onChange={(e) =>
                  setData({ ...data, receiver_id: e.target.value })
                }
                className="input_field"
                inputGroupClass="left"
                isRequired={true}
              />
              <Input
                label="Confirm Receiver user id"
                type="text"
                name="confirm_receiver_id"
                value={data?.confirm_receiver_id}
                placeholder="Enter your receiver user id"
                onChange={(e) =>
                  setData({ ...data, confirm_receiver_id: e.target.value })
                }
                className="input_field"
                inputGroupClass="right"
                error={formErrors.confirm_receiver_id}
                isRequired={true}
              />
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
            <div
              className="form_group text_area"
              style={{ display: "inherit" }}
            >
              <TextArea
                label="Remark"
                name="remark"
                id="remark"
                cols="30"
                rows="10"
                onChange={(e) => setData({ ...data, remark: e.target.value })}
                value={data?.remark}
                isRequired={true}
                placeholder="Write Your Message..."
              />
            </div>
            <Button type="submit" className="submit_btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Reward Transfer"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default RewardTransfer;
