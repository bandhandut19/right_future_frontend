import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardLayout from "../../../components/CardLayout";
import Loading from "../../../components/Loading/Loading";
import { Notification } from "../../../components/ToastNotification";
import {
  useAddAutoPoolControllerMutation,
  useGetAutopoolStatusQuery,
} from "../../../Services/userApi";
import AutopoolControllerCard from "./AutopoolContollerCard/AutopoolControllerCard";

const AutoPoolConttoller = () => {
  const [fieldIdentity, setFieldIdentity] = useState(1);
  const [
    addAutoPoolController,
    {
      error: ControllerError,
      data: ControllerRes,
      isLoading: isLoadingAutopoolController,
    },
  ] = useAddAutoPoolControllerMutation();
  const { data: AutopoolStatus, isLoading } = useGetAutopoolStatusQuery();

  useEffect(() => {
    if (ControllerRes?.message) {
      Notification(ControllerRes?.message, "success");
    } else {
      Notification(ControllerError?.data?.message, "error");
    }
  }, [ControllerError, ControllerRes]);

  const status = "AutoPool_OFF";
  const handleChangeIncomeType = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "autopool-one":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[0]?.status,
        });
        break;
      case "autopool-two":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[1]?.status,
        });
        break;
      case "autopool-three":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[2]?.status,
        });
        break;
      case "autopool-four":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[3]?.status,
        });
        break;
      case "autopool-five":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[4]?.status,
        });
        break;
      case "autopool-six":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[5]?.status,
        });
        break;
      case "autopool-seven":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[6]?.status,
        });
        break;
      case "autopool-eight":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[7]?.status,
        });
        break;
      case "autopool-nine":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[8]?.status,
        });
        break;
      case "autopool-ten":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[9]?.status,
        });
        break;
      case "autopool-eleven":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[10]?.status,
        });
        break;
      case "autopool-twelve":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[11]?.status,
        });
        break;
      case "autopool-thirteen":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[12]?.status,
        });
        break;
      case "autopool-fourteen":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[13]?.status,
        });
        break;
      case "autopool-fifteen":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[14]?.status,
        });
        break;
      case "autopool-sixteen":
        addAutoPoolController({
          autopool_name: e.target.value,
          status: !AutopoolStatus[15]?.status,
        });
        break;
      default:
        Notification("Select Any Autopool", "error");
        break;
    }
  };

  if (isLoading || isLoadingAutopoolController) {
    return <Loading />;
  }
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div className="tp_income_distribution_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="tp_income_distribution_form_card"
      >
        {" "}
        <div className="tp_section_title">
          <h2>Auto Pool Controller</h2>
        </div>
        <div className="autopool_container">
          {AutopoolStatus?.map((st, i) => (
            <AutopoolControllerCard
              key={i}
              st={st}
              handleChangeIncomeType={handleChangeIncomeType}
              isLoadingAutopoolController={isLoadingAutopoolController}
            />
          ))}
        </div>
      </CardLayout>
    </div>
  );
};

export default AutoPoolConttoller;
