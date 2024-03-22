import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import { Notification } from "../../../components/ToastNotification";
import { updateTxrAddressValidate } from "../../../components/Validation/vaildate";
import {
  useEditTrxAddressMutation,
  useGetLoginUserQuery,
} from "../../../Services/userApi";

const UpdateWallet = () => {
  const { data: userData } = useGetLoginUserQuery();
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [showTrxField, setShowTrxField] = useState(false);
  const [data, setData] = useState({
    trx_address: userData?.data?.wallet_address,
    trx_password: "",
  });

  // trx address update
  const [editTrxWallet, { error, data: trxData, isLoading }] =
    useEditTrxAddressMutation();

  useEffect(() => {
    if (trxData?.message) {
      Notification(trxData?.message, "success");
      setData({
        trx_address: "",
        trx_password: "",
      });
      setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, trxData]);
  useEffect(() => {
    setFormErrors(updateTxrAddressValidate(data));
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("Space is not allow in TRX Address", "error");
      setShowTrxField(false);
    } else {
      if (!data.trx_password) {
        Notification("Transaction password is required", "error");
        setShowTrxField(true);
      } else {
        await editTrxWallet(data);
      }
    }
  };
  return (
    <div className="rf_updatewallet_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_updatewallet_card"
      >
        <div className="rf_updatewallet_title">
          <h2>Add or Update USDT Address</h2>
        </div>
        <div className="rf_updatewallet_field">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="USDT Address"
                type="text"
                value={data.trx_address}
                name="trx_address"
                onChange={(e) =>
                  setData({ ...data, trx_address: e.target.value })
                }
                placeholder="Enter USDT wallet address"
              />
            </div>
            {showTrxField && (
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
              </div>
            )}
            <Button
              type="submit"
              className="updatewallet_btn"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "update"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default UpdateWallet;
