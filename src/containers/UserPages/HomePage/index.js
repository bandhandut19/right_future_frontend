import React, { useEffect, useState, useRef } from "react";
// import { BsArrowLeftRight } from "react-icons/bs";
import CardLayout from "../../../components/CardLayout";
// import SectionCommonTable from "../../../components/SectionCommonTable";
import HomeCard from "./Home.Card";
// import Chart from "../../../components/Chart";
import { Notification } from "../../../components/ToastNotification";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
// import roiIcon from "../../../assets/dashboardIcon/roi.png";
import totalIncome from "../../../assets/dashboardIcon/income.png";
import { BsWhatsapp, BsTelegram, BsFacebook } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import levelIcon from "../../../assets/dashboardIcon/level.png";
import BoosterIncome from "../../../assets/dashboardIcon/booster_income.png";
import teamIcon from "../../../assets/dashboardIcon/team.png";
import ThisMonthsTeamIcon from "../../../assets/dashboardIcon/team2.png";
import InDirectIncome from "../../../assets/dashboardIcon/indriectincome.png";
import DirectIncome from "../../../assets/dashboardIcon/direct_income.png";
import withdrawIncome from "../../../assets/dashboardIcon/withdraw_income.png";
import AutoPoolIncome from "../../../assets/dashboardIcon/autopool_income.png";
// import monthIncome from "../../../assets/dashboardIcon/month_income.png";
import userListIcon from "../../../assets/dashboardIcon/userlist.png";
import {
  useGetLoginUserQuery,
  useGetMonthlyDirectMemberQuery,
  useLevelTeamListQuery,
} from "../../../Services/userApi";
import {
  useGetAllWalletQuery,
  useGetAutoPoolHistoryQuery,
} from "../../../Services/walletApi";
// import TeamTopup from "./table/TeamTopup";
// import RoiInocmeTable from "./table/RoiIncomeTable";
import { popupShow } from "../../../containers/AuthPages/Login";
import Modal from "../../../components/Modal";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useGetPopupImageQuery } from "../../../Services/Setting";
import {
  useAddEnterDefaultAutopoolMutation,
  useGetAccessAutopoolQuery,
} from "../../../Services/walletApi";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { AutoPoolTotalIncomeCal } from "../../../config/autoPoolTotalIncomeCalculate";
import { useGetBoosterUpgradeUserIncomeQuery } from "../../../Services/earningApi";

const HomePage = () => {
  const { data: popupImage } = useGetPopupImageQuery();
  const { data: boosterUpgrade, isLoading: isLoadingBoosterUpgrade } = useGetBoosterUpgradeUserIncomeQuery();
  const totalSum = boosterUpgrade?.data?.reduce((acc, curr) => {
    return acc + curr?.totalIncome;
  }, 0);
  // const [totalAutopool, setTotalAutopool] = useState(0);
  /* all data fetching api */
  const { data } = useGetAllWalletQuery();
  const autoTradeInc = data?.autoTradeIncome + data?.autoTradeReferralIncome;
  /* fund transfer history */
  // const { data: transferHistoryShow } = useTransferHistoryQuery();
  // console.log(transferHistoryShow);
  // get user data
  const { data: userData } = useGetLoginUserQuery();

  // get fund transfer history data
  // const { data: TransferHistoryData } = useTransferHistoryQuery();
  // console.log(TransferHistoryData);

  const { data: autoPoolData } = useGetAutoPoolHistoryQuery();
  /* total autopool income  */
  // useEffect(() => {
  //   console.log(autoPoolData?.autoPoolData);
  //   console.log(autoPoolData?.autoPoolData?.firstautopool[0]?.total);
  //   console.log(autoPoolData?.autoPoolData?.firstautopool[1]?.total);
  //   const first =
  //     autoPoolData?.autoPoolData?.firstautopool[0]?.total +
  //     autoPoolData?.autoPoolData?.firstautopool[1]?.total;
  //   console.log("first", first);
  //   const second =
  //     autoPoolData?.autoPoolData?.secondautopool[0]?.total +
  //     autoPoolData?.autoPoolData?.secondautopool[1]?.total;
  //   console.log("second", second);
  //   setTotalAutopool(totalAutopool + first);
  //   setTotalAutopool(totalAutopool + second);
  // }, [autoPoolData]);

  // console.log(totalAutopool);

  /* autopool button logic */
  const navigate = useNavigate();
  const { data: AccessAutopool, isLoading: isLoadingAccessAutopool } =
    useGetAccessAutopoolQuery();
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
      navigate("/dashboard");
    } else {
      Notification(DefaultAutopoolError?.data?.message, "error");
    }
  }, [DefaultAutopoolError, DefaultAutopoolData, navigate]);

  const autopoolStart = async (e) => {
    e.preventDefault();
    console.log("i am clicked");
    AddDefaultAutopool();
  };

  const [openModalForImage, setOpenModalForImage] = useState(popupShow);
  const modalImageRef = useRef(null);
  useClickOutside(modalImageRef, () => setOpenModalForImage(false));

  const [inputVal, setInputVal] = useState({
    leftVal: `${window.location.origin}/register?sponsorid=${userData?.data?.user_id}`,
  });
  const copyToClipboard = (type) => {
    if (type === "left") {
      navigator.clipboard.writeText(inputVal.leftVal);
      Notification("Text copied", "success");
    }
  };
  useEffect(() => {
    setInputVal({
      leftVal: `${window.location.origin}/register?sponsorid=${userData?.data?.user_id}`,
    });
  }, [userData?.data?.user_id]);

  const { data: LevelTeamListData } = useLevelTeamListQuery();
  const directTeamData = LevelTeamListData?.level?.filter(
    (team) => team.level === "1"
  );
  const { data: MonthlyDirectMember } = useGetMonthlyDirectMemberQuery();

  
  // // whatsapp button handler
  // const handleWhatsAppButtonClick = () => {
  //   const message = encodeURIComponent("Hello Taskplanet!");
  //   const whatsappLink = `https://wa.me/+919034325250/?text=${message}`;
  //   window.open(whatsappLink);
  // };

  // facebook post share handle
  const handleFbShareButtonClick = () => {
    const appUrl = `${window.location.origin}/register?sponsorid=${userData?.data?.user_id}`;
    const postUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      appUrl
    )}`;
    window.open(postUrl, "_blank");
  };

  // telegram post share handle
  const handleTeShareButtonClick = () => {
    const postText = "Join Taskplanet";
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      `${window.location.origin}/register?sponsorid=${userData?.data?.user_id}`
    )}&text=${encodeURIComponent(postText)}`;
    window.open(telegramUrl, "_blank");
  };

  // whatsapp share handle
  const shareOnWhatsApp=()=> {
    const url = `${window.location.origin}/register?sponsorid=${userData?.data?.user_id}`;
    const message = encodeURIComponent("Join Taskplanet: " + url);

    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }

  if (isLoadingAccessAutopool || isLoadingBoosterUpgrade) {
    return <Loading />;
  }

  return (
    <div className="rf_homPage_wrapper" id="pddfff">
      <div className="rf_section_title for_download_handle">
        <h2>Dashboard</h2>
      </div>
      <div className="importantLinks">
        <span>Referrel URL </span>
        <div className="socialLinksBox">
          <div className="socialLinks">
            {/* refer link */}
            <button className="refferLink" onClick={() => copyToClipboard("left")}>
              <ImCopy /> Copy reffer link
            </button>
            {/* whatsapp */}
            <button className="refWhatsappButton" onClick={shareOnWhatsApp}>
              <BsWhatsapp /> Whatsapp
            </button>
          </div>
          <div className="socialLinks">
            {/* facebook */}
            <button
              className="refFacebookButton"
              onClick={handleFbShareButtonClick}
            >
              <BsFacebook /> Facebook
            </button>
            {/* telegram */}
            <button
              className="refTelegramButton"
              onClick={handleTeShareButtonClick}
            >
              <BsTelegram /> Telegram
            </button>
          </div>
        </div>
      </div>
      {/* 1st row */}
      <div className="first_row dashboard_content">
        <div className="rf_dash_content_item">
          <div className="rf_dash_content card_row">
            <HomeCard
              cardName="Direct Income"
              cardValue={`$${
                data?.direct_income
                  ? parseFloat(data?.direct_income).toFixed(2)
                  : "0"
              }`}
              icon={DirectIncome}
              linkText="view details"
              bgColor="#38cab3"
              cardBgColor="#fe9f43"
            />
            <HomeCard
              cardName="Indirect Income"
              cardValue={`$${
                data?.indirect_income
                  ? parseFloat(data?.indirect_income).toFixed(2)
                  : "0"
              }`}
              icon={InDirectIncome}
              linkText="view details"
              bgColor="#ffbd5a"
              cardBgColor="#00d0e7"
            />
            <HomeCard
              cardName="Total Income"
              cardValue={`$${
                data?.active_amount
                  ? parseFloat(data?.active_amount + totalSum).toFixed(2)
                  : "0"
              }`}
              icon={totalIncome}
              bgColor="#F49D1A"
              cardBgColor="#28c66f"
            />
            <HomeCard
            cardName="Auto Trade Income"
            cardValue={`$${
              autoTradeInc             
                ? parseFloat(autoTradeInc).toFixed(2)
                : "0"
            }`}
            icon={AutoPoolIncome}
            bgColor="#38cab3"
            cardBgColor="#fe9f43"
          />
            <HomeCard
              cardName="Total Auto Pool Income"
              cardValue={`$${
                AutoPoolTotalIncomeCal(autoPoolData)
                  ? AutoPoolTotalIncomeCal(autoPoolData)
                  : "0"
              }`}
              icon={AutoPoolIncome}
              bgColor="#F49D1A"
              cardBgColor="#00d0e7"
            />
            {/* <HomeCard
              cardName="Active Auto Pool Income"
              cardValue={`$${
                data?.autopool_income
                  ? parseFloat(data?.autopool_income).toFixed(2)
                  : "0"
              }`}
              icon={AutoPoolIncome}
              bgColor="#F49D1A"
              cardBgColor="#28c66f"
            /> */}
            <HomeCard
              cardName="Booster Income"
              cardValue={`$${
                data?.booster_income ? data?.booster_income : "0"
              }`}
              icon={BoosterIncome}
              bgColor="#4ec2f0"
              cardBgColor="#fe9f43"
            />
            <HomeCard
              cardName="Income Level Update"
              cardValue={`$${
                data?.level_update_income
                  ? parseFloat(data?.level_update_income).toFixed(2)
                  : "0"
              }`}
              icon={levelIcon}
              bgColor="#5F8D4E"
              cardBgColor="#00d0e7"
            />
            <HomeCard
              cardName="Direct Withdraw Income"
              cardValue={`$${
                data?.direct_withdraw_income ||
                data?.direct_fund_transfer_income ||
                data?.user_activation_income
                  ? parseFloat(
                      data?.direct_withdraw_income +
                        data?.direct_fund_transfer_income +
                        data?.user_activation_income
                    ).toFixed(2)
                  : "0"
              }`}
              icon={withdrawIncome}
              bgColor="#9ED5C5"
              cardBgColor="#28c66f"
            />

            <HomeCard
              cardName="Active Income"
              cardValue={`$${
                data?.total_income
                  ? parseFloat(data?.total_income).toFixed(2)
                  : "0"
              }`}
              icon={totalIncome}
              bgColor="#6C4AB6"
              cardBgColor="#fe9f43"
            />

            <HomeCard
              cardName="Direct team"
              cardValue={`${directTeamData ? directTeamData?.length : "0"}`}
              icon={userListIcon}
              bgColor="#8EC3B0"
              cardBgColor="#00d0e7"
            />
            <HomeCard
              cardName="This Month Direct Team"
              cardValue={`${
                MonthlyDirectMember?.Current_direct_member
                  ? MonthlyDirectMember?.Current_direct_member
                  : "0"
              }`}
              icon={ThisMonthsTeamIcon}
              bgColor="#D989B5"
              cardBgColor="#28c66f"
            />
            {/* <HomeCard
              cardName="This Month Income"
              cardValue={`$${
                data?.roi_bonus ? parseFloat(data?.roi_bonus).toFixed(2) : "0"
              }`}
              icon={monthIncome}
              bgColor="#FF6464"
            /> */}
            <HomeCard
              cardName="Total Team"
              cardValue={`${
                LevelTeamListData?.level
                  ? LevelTeamListData?.level?.length
                  : "0"
              }`}
              icon={teamIcon}
              bgColor="#5F8D4E"
              cardBgColor="#fe9f43"
            />
            <HomeCard
              cardName="Current Autopool status"
              cardValue={`${userData?.data?.current_autopool}`}
              icon={teamIcon}
              bgColor="#4ec2f0"
              cardBgColor="#00d0e7"
            />
            {/* <HomeCard
              cardName="Total Autopool Income"
              cardValue={`${totalAutopool ? totalAutopool : "0"}`}
              icon={totalIncome}
              bgColor="#F49D1A"
            /> */}
          </div>
          {/* <CardLayout
            style={{ backgroundColor: "#fff", overflow: "hidden" }}
            className="rf_dashboard_chart"
          >
            <Chart />
          </CardLayout> */}
          <div className="rf_autopool_button_section">
            {AccessAutopool?.status ? (
              <button
                onClick={autopoolStart}
                disabled={AddEnterDefaultAutopoolLoading}
              >
                {AddEnterDefaultAutopoolLoading
                  ? "Loading..."
                  : "Autopool Enter"}
              </button>
            ) : null}
          </div>
          <div className="rf_link_copy_section card_row">
            <CardLayout>
              <form>
                <div className="rf_input_field">
                  <Input
                    type="text"
                    placeholder="Enter refer link"
                    name="left_link"
                    value={inputVal.leftVal}
                    disabled={true}
                  />
                  <Button type="button" onClick={() => copyToClipboard("left")}>
                    copy refer link
                  </Button>
                </div>
              </form>
            </CardLayout>
          </div>
        </div>
      </div>
      {/* 2nd row */}
      {/* <div className="second_row">
        <div className="recent_fund_transfer card_row">
          <CardLayout
            style={{ backgroundColor: "#fff" }}
            className="rf_recent_fund_transfer_card"
          >
            <div className="rf_recent_fund_transfer">
              <div className="card_heading">
                <h2>recent fund transfer</h2>
              </div>
              <div className="rf_recent_fund_transfer_item">
                <ul className="rf_recent_fund_transfer_ul">
                  {TransferHistoryData?.history?.slice(0, 4)?.map((d, i) => (
                    <li key={i}>
                      <div className="fund_transfer_image">
                        <span className="icon">
                          <BsArrowLeftRight />
                        </span>
                        <div className="left_name">
                          <p className="name">{d.receiver_id}</p>
                          <p className="date">
                            {new Date(d.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="fund_transfer_content">
                        <p className="status">{d.status}</p>
                        <p className="amount">${d.amount}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardLayout>
        </div>
        <SectionCommonTable
          wrapperClassName="rf_topup_card"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Team Topup"
          // table={<TeamTopupTable />}
          table={<TeamTopup />}
        />
      </div> */}
      {/* ROI Table */}
      {/* <div className="rf_my_topup card_row">
        <SectionCommonTable
          wrapperClassName="rf_my_topup_card"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="ROI Income"
          table={<RoiInocmeTable />}
        />
      </div> */}
      {popupImage?.avatar ? (
        <Modal
          openModal={openModalForImage}
          setOpenModal={setOpenModalForImage}
          modalTitle=""
          modalRef={modalImageRef}
        >
          <div className="rf_commol_modal_field">
            <img src={popupImage?.avatar} className="popupImage" alt="popup" />
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default HomePage;
