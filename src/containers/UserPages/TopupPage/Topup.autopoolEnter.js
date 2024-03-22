import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { Notification } from "../../../components/ToastNotification";
import { useGetLoginUserQuery } from "../../../Services/userApi";
import {
  useAddEnterDefaultAutopoolMutation, useGetAccessAutopoolQuery,
} from "../../../Services/walletApi";

const AutopoolEnterTopup = () => {
  const { data: userData } = useGetLoginUserQuery();
  const [data, setData] = useState({
    user_id: userData?.data?.user_id,
  });
  const { data: AccessAutopool } =
    useGetAccessAutopoolQuery();
  // error
  const [
    AddDefaultAutopool,
    {
      error: DefaultAutopoolError,
      data: DefaultAutopoolData,
      isLoading: AddEnterDefaultAutopoolLoading,
    },
  ] = useAddEnterDefaultAutopoolMutation();

  useEffect(() => {
    if (DefaultAutopoolData?.message) {
      Notification(DefaultAutopoolData?.message, "success");
    } else {
      Notification(DefaultAutopoolError?.data?.message, "error");
    }
  }, [DefaultAutopoolError, DefaultAutopoolData]);

  const autopoolStart = async (e) => {
    e.preventDefault();
    console.log("i am clicked");
    AddDefaultAutopool();
  };

  return (
    <div className="rf_topupaccount_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_topupaccount_form_card"
      >
        <div className="rf_section_title">
          <h2>Auto Pool Enter</h2>
          {/* <div className="rf_section_title_right_side">
            <div className="rf_section_title_balance">
              <p>
                USD:{" "}
                {`$${total_amount ? parseFloat(total_amount).toFixed(2) : "0"}`}
              </p>
            </div>
          </div> */}
        </div>
        <div className="rf_topupaccount_page_content">
          <form onSubmit={autopoolStart}>
            <div className="form_group" style={{width: '100%'}}>
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
                disabled={true}
                style={{width: '100%'}}
              />

            </div>
            {
              AccessAutopool?.status ? (
                <Button
                type="submit" className="submit_btn"
                  disabled={AddEnterDefaultAutopoolLoading}
                  style={{width: "100%"}}
                >
                  {AddEnterDefaultAutopoolLoading
                    ? "Loading..."
                    : "Autopool Enter"}
                </Button>
              ) : null
            }
            {/* {
              isLoading === false && <Button type="submit" className="submit_btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Topup"}
            </Button>
            } */}
          </form>
        </div>
      </CardLayout>
    </div>
  );
};

export default AutopoolEnterTopup;
