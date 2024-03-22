import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Notification } from "../../../components/ToastNotification";
import { topupAccountValidate } from "../../../components/Validation/vaildate";
import { useGetLoginUserQuery } from "../../../Services/userApi";
import {
  useGetAllWalletQuery,
  useAutopoolTopupApiPackageMutation,
  useGetCurrentAutoPoolQuery,
} from "../../../Services/walletApi";

// const selectOption = ["Auto Pool 2"];

const UpgradeAutoPool = () => {
  const { data: userData } = useGetLoginUserQuery();
  const [selectOptionForNextAutoPool, setSelectOptionForNextAutoPool] =
    useState([]);
  const { data: allWalletInfo } = useGetAllWalletQuery();
  const { data: currentAutopool } = useGetCurrentAutoPoolQuery();
  useEffect(() => {
    setSelectOptionForNextAutoPool([
      `Auto Pool ${currentAutopool?.currentautopool + 1}`,
    ]);
    // setSelectOptionForNextAutoPool("Auto Pool 2");
  }, [currentAutopool]);
  const [showTrxField, setShowTrxField] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // form errors
  const [data, setData] = useState({
    user_id: userData?.data.user_id,
    autoPoolType: "",
    packages: "",
    trx_password: "",
  });
  // error
  useEffect(() => {
    setFormErrors(topupAccountValidate(data));
  }, [data]);
  //
  const handleChange = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "Auto Pool 1":
        Notification("Activate Your Account First", "error");
        setData({ ...data, packages: "0", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 2":
        setData({ ...data, packages: "50", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 3":
        setData({ ...data, packages: "100", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 4":
        setData({ ...data, packages: "150", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 5":
        setData({ ...data, packages: "200", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 6":
        setData({ ...data, packages: "290", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 7":
        setData({ ...data, packages: "540", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 8":
        setData({ ...data, packages: "1030", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 9":
        setData({ ...data, packages: "2000", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 10":
        setData({ ...data, packages: "3930", [e.target.name]: e.target.value });
        break;
      case "Auto Pool 11":
        setData({...data, packages: "7680", [e.target.name]: e.target.value,});
        break;
      case "Auto Pool 12":
        setData({
          ...data,
          packages: "15470",
          [e.target.name]: e.target.value,
        });
        break;
      case "Auto Pool 13":
        setData({
          ...data,
          packages: "30840",
          [e.target.name]: e.target.value,
        });
        break;
      case "Auto Pool 14":
        setData({
          ...data,
          packages: "61570",
          [e.target.name]: e.target.value,
        });
        break;
      case "Auto Pool 15":
        setData({
          ...data,
          packages: "123020",
          [e.target.name]: e.target.value,
        });
        break;
        case "Auto Pool 16":
          setData({
            ...data,
            packages: "245910",
            [e.target.name]: e.target.value,
          });
          break;
      default:
        setData({ ...data, packages: "0", [e.target.name]: e.target.value });
        break;
    }
  };
  // add topup
  const [addAutoPool, { data: autoPoolData, error, isLoading }] =
    useAutopoolTopupApiPackageMutation();
  useEffect(() => {
    if (autoPoolData?.message) {
      Notification(autoPoolData?.message, "success");
      setData({
        user_id: "",
        packages: "",
        trx_password: "",
        autoPoolType: "",
      });
      setShowTrxField(false);
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, autoPoolData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      setShowTrxField(false);
    } else {
      if (!data.trx_password) {
        setShowTrxField(true);
        Notification("Transaction password is required", "error");
      } else {
        setShowTrxField(true);
        const AutoPoolData = {
          ...data,
          packages: parseInt(data?.packages),
          // packages: parseInt(data?.packages.split(" ")[1]?.slice(1)),
          user_id: data.user_id?.toUpperCase(),
        };
        // console.log(AutoPoolData);
        await addAutoPool(AutoPoolData);
      }
    }
  };
  const total_amount =
    parseFloat(allWalletInfo?.total_deposite) +
    parseFloat(allWalletInfo?.total_income);

  return (
    <div className="rf_autopool_user_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_autopool_user_form_card"
      >
        <div className="rf_section_title">
          <h2>Upgrade Auto Pool</h2>
          <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance">
              <p>
                USD:{" "}
                {`$${total_amount ? parseFloat(total_amount).toFixed(2) : "0"}`}
              </p>
            </div>
          </div>
        </div>
        <div className="rf_autopool_user_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label="User ID"
                type="text"
                name="user_id"
                placeholder="Enter your user id"
                value={data.user_id}
                onChange={(e) => setData({ ...data, user_id: e.target.value })}
                className="input_field"
                inputGroupClass="left"
                isRequired={true}
              />
              <div className="package">
                <Select
                  label="Auto Pool"
                  className="select_field"
                  value={data.autoPoolType}
                  name="autoPoolType"
                  onChange={handleChange}
                  options={selectOptionForNextAutoPool}
                  isRequired={true}
                  inputGroupClass="right"
                />
              </div>
            </div>
            <div className="form_group">
              <Input
                label="Amount ($)"
                type="text"
                name="packages"
                placeholder="Amount"
                value={data.packages}
                className="input_field"
                inputGroupClass="left amount_field"
                isRequired={true}
                disabled={true}
              />
              {showTrxField && (
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
                  inputGroupClass="right"
                  isRequired={true}
                />
              )}
            </div>
            {/* {showTrxField && (
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
              {isLoading ? "Loading..." : "AutoPool"}
            </Button>
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default UpgradeAutoPool;
