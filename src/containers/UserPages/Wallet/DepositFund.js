import React, { useEffect, useRef, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosAlert } from "react-icons/io";
import QR from "../../../assets/walletAddress.jpg";
import { Notification } from "../../../components/ToastNotification";
import Button from "../../../components/Button";
import CardLayout from "../../../components/CardLayout";
import Input from "../../../components/Input";
import { FaShareAlt } from "react-icons/fa";
import { useClickOutside } from "../../../hooks/useClickOutside";
import Modal from "../../../components/Modal";
import html2canvas from "html2canvas";
import { depositAmountValidate } from "../../../components/Validation/vaildate";
import {
  useAddDepositFundMutation,
  useGetAllWalletQuery,
} from "../../../Services/walletApi";
import {
useGetLoginUserQuery,
} from "../../../Services/userApi";
const DepositFundPage = () => {
  const { data: allWalletInfo } = useGetAllWalletQuery();
  const { data: userData } = useGetLoginUserQuery();
  const [showTrxField, setShowTrxField] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // form errors
  const inputRef = useRef(null);
  const [value, setValue] = useState({
    user_id: userData?.data?.user_id,
    amount: "",
    hash: "",
    proof: "",
    trx_password: "",
  });
  // error
  useEffect(() => {
    setFormErrors(depositAmountValidate(value));
  }, [value]);
  const [addDeposit, { data: depositData, error, isLoading }] =
    useAddDepositFundMutation();
  useEffect(() => {
    if (depositData?.message) {
      Notification(depositData?.message, "success");
      setValue({
        user_id: "",
        amount: "",
        hash: "",
        proof: "",
        trx_password: "",
      });
      setShowTrxField(false);
      document.getElementById("proof").value = ""; // reset file input field
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, depositData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", value.proof);
    formData.append("user_id", value.user_id?.toUpperCase());
    formData.append("amount", value.amount);
    formData.append("hash", value.hash);
    formData.append("trx_password", value.trx_password);

    if (Object.keys(formErrors).length > 0) {
      Notification("All conditions and fields are required", "error");
      setShowTrxField(false);
    } else {
      if (!value.trx_password) {
        setShowTrxField(true);
        Notification("Transaction password is required", "error");
      } else {
        if (value.amount < 0) {
          Notification("Negative amount is not allow", "error");
        } else {
          setShowTrxField(true);
          console.log(formData)
          await addDeposit(formData);
        }
      }
    }
  };

  // copy wallet address
  const [inputVal, setInputVal] = useState({
    trx: "0x19664aac89610208e0320f4799e8f512a1e1d472",
  });
  const copyToClipboard = () => {
    navigator.clipboard.writeText(inputVal.trx);
    Notification("Text copied", "success");
  };
  useEffect(() => {
    setInputVal({
      trx: "0x19664aac89610208e0320f4799e8f512a1e1d472",
    });
  }, []);
  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));
  // download qr code
  const downloadQrCode = () => {
    html2canvas(document.querySelector(".qr_info")).then((canvas) => {
      const a = document.createElement("a");
      a.href = canvas
        .toDataURL(".assets/image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "tronlive.club_deposit.png";
      a.click();
    });
  };
  // const trx = parseFloat(allWalletInfo?.total_deposite).toFixed(3);
  // const trx_amount = (trx * 11.8)?.toFixed(3);
  // console.log(trx_amount);

  return (
    <>
      <div className="rf_topupaccount_page_wrapper">
        <CardLayout
          style={{ backgroundColor: "#fff" }}
          className="rf_topupaccount_form_card"
        >
          <div className="rf_section_title">
            <h2>Deposit Fund</h2>
            <div className="rf_section_title_right_side">
              <div className="rf_section_title_balance rf_section_Trx_balance">
                <p>
                  USDT:{" "}
                  ${allWalletInfo?.total_deposite
                    ? parseFloat(allWalletInfo?.total_deposite).toFixed(2)
                    : "0"}
                </p>
              </div>
            </div>
          </div>
          <div className="rf_topupaccount_page_content">
            <div className="qr_code_box">
              <div className="qr_img">
                <img src={QR} alt="qr" />
              </div>
              <div className="qr_share" onClick={() => setOpenModal(true)}>
                <span>
                  <FaShareAlt />
                </span>
                <span>Share</span>
              </div>
              <div className="qr_address">
                <Input
                  label="Destination Address"
                  type="text"
                  value={inputVal.trx}
                  className="input_field"
                  disabled={true}
                  inputGroupClass="left"
                />
                <span style={{ marginTop: "-5px" }} onClick={copyToClipboard}>
                  <MdOutlineContentCopy />
                </span>
              </div>
              <div className="disclaimer">
                <div className="dis_alert">
                  <span>
                    <IoIosAlert />
                  </span>
                  <span>Disclaimer</span>
                </div>
                <ul>
                  <li>Send only UDST to this deposit address.</li>
                  <li>
                    This address does not support deposit of non-fungible token,
                    please go to NFT page to deposit NFT.
                  </li>
                  <li>
                   Kindly send your USDT include tax.
                  </li>
                  <li>
                  Network allowance only BNB Smart Chain(BEP20).
                  </li>
                </ul>
              </div>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form_group">
                <Input
                  label="User ID"
                  type="text"
                  name="user_id"
                  placeholder="Enter your user id"
                  onChange={(e) =>
                    setValue({ ...value, user_id: e.target.value })
                  }
                  className="input_field"
                  value={value.user_id}
                  inputGroupClass="left"
                  isRequired={true}
                />
                <Input
                  label="Amount"
                  type="number"
                  name="amount"
                  placeholder="Enter your amount"
                  onChange={(e) =>
                    setValue({ ...value, amount: e.target.value })
                  }
                  value={value.amount}
                  className="input_field amount_input_field"
                  inputGroupClass="right amount_field"
                  isRequired={true}
                />
              </div>
              <div className="form_group">
                <Input
                  label="Proof"
                  type="file"
                  name="proof"
                  placeholder="Enter your proof"
                  onChange={(e) =>
                    setValue({ ...value, proof: e.target.files[0] })
                  }
                  className="input_field"
                  id="proof"
                  ref={inputRef}
                  inputGroupClass="left"
                  isRequired={true}
                />
                <Input
                  label="Hash"
                  type="text"
                  name="hash"
                  placeholder="Enter your hash"
                  onChange={(e) => setValue({ ...value, hash: e.target.value })}
                  value={value.hash}
                  className="input_field"
                  inputGroupClass="right"
                />
              </div>
              {showTrxField && (
                <div className="form_group">
                  <Input
                    label="Transaction Password"
                    type="text"
                    name="trx_password"
                    placeholder="Enter your transaction password"
                    onChange={(e) =>
                      setValue({ ...value, trx_password: e.target.value })
                    }
                    value={value.trx_password}
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
              <Button type="submit" className="submit_btn" disabled={isLoading}>
                {isLoading ? "Loading..." : "Deposit"}
              </Button>
            </form>
          </div>
        </CardLayout>
      </div>
      {/* qr code modal */}
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        // modalTitle="Transaction Details"
        modalRef={modalRef}
      >
        <div className="rf_commol_modal_field">
          <div className="qr_code_popup">
            <div className="qr_info">
              <div className="qr_title">
                <h2>Right Future</h2>
              </div>
              <div className="subtitle">
                <h3>USDT</h3>
              </div>
              <div className="qr_code_image">
                <img src={QR} alt="qr" />
                <div className="qr_address">
                  <span>Address</span>
                  <p>0x19664aac89610208e0320f4799e8f512a1e1d472</p>
                </div>
              </div>
            </div>
            {/* <Popover openPopover={openSocial} className="social_popup">
              <div className="social" ref={socialRef}>
                {social.map((d, i) => (
                  <d.btn url={photo} key={i + 1}>
                    <d.icon size={32} round={true} />
                  </d.btn>
                ))}
              </div>
            </Popover> */}
            <div className="qr_button">
              <Button
                type="button"
                className="download"
                onClick={downloadQrCode}
                style={{ margin: "auto" }}
              >
                download
              </Button>
              {/* <Button
                type="button"
                className="share"
                onClick={() => {
                  socialShare();
                  setOpenSocial(true);
                }}
              >
                share
              </Button> */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DepositFundPage;
