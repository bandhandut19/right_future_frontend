import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Modal from "../../../components/Modal";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useContactUsHistoryQuery } from "../../../Services/SupportApi";
import ContactusHistoryTable from "./table/contactusHistoryTable";

const ContactusHistory = () => {
  const { data } = useContactUsHistoryQuery();
  const [details, setDetails] = useState({});
  const showMessage = (body) => {
    setDetails(body);
    setOpenModal(true);
  };
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));

  return (
    <>
      <SectionCommonTable
        wrapperClassName="mytopuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Contact us History"
        table={<ContactusHistoryTable data={data} showMessage={showMessage} />}
      />
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalTitle="Message"
        modalRef={modalRef}
      >
        <div className="rf_message_modal_field">
          <div className="message_details">
            <div className="message_group">
              <p>{details?.message}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactusHistory;
