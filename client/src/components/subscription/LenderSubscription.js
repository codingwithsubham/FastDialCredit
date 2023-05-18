import React, { useState } from "react";
import PaymentGateway from "../paymentGateway/PaymentGateway";
import { TYPE } from "../../common/paymentType";

const LenderSubscription = () => {
  const [openPG, setOpenPG] = useState(false);
  const [amnt, setAmnt] = useState(0);
  const [type, setType] = useState("");
  const handleClose = () => {
    setOpenPG(false);
  };

  const handleBtnClick = (am) => {
    if (am === 1) {
      setType(TYPE.LENDER_SUB_MONTHLY);
      setAmnt(am);
    } else if (am === 2) {
      setType(TYPE.LENDER_SUB_QUATERLY);
      setAmnt(am);
    } else if (am === 3) {
      setType(TYPE.LENDER_SUB_YEARLY);
      setAmnt(am);
    } else {
      setType(TYPE.LENDER_SUB_MONTHLY);
      setAmnt(1);
    }
    setOpenPG(true);
  };

  return (
    <div className="brrwr-sbs insta-an">
      <i className="fa fa-check success"></i>
      <p>To Explore More and get Quick Assistance Subscribe now</p>
      <div className="sbs-btns">
        <button
          className="btn icn-btn big dngr"
          onClick={() => handleBtnClick(1)}
        >
          Subscribe Now 1000/Month
        </button>
        <button
          className="btn icn-btn big lgt"
          onClick={() => handleBtnClick(2)}
        >
          Subscribe Now 2500/3Month
        </button>
        <button
          className="btn icn-btn big scss"
          onClick={() => handleBtnClick(2)}
        >
          Subscribe Now 7500/12Month
        </button>
      </div>

      {openPG && (
        <PaymentGateway
          openPG={openPG}
          amnt={amnt}
          type={type}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default LenderSubscription;
