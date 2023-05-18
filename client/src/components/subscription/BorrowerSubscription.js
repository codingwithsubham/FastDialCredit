import React, { useState } from "react";
import PaymentGateway from "../paymentGateway/PaymentGateway";
import { TYPE } from "../../common/paymentType";

const BorrowerSubscription = () => {
  const [openPG, setOpenPG] = useState(false);
  const handleClose = () => {
    setOpenPG(false);
  };
  return (
    <div className="brrwr-sbs insta-an">
      <i className="fa fa-check success"></i>
      <p>To Explore More and get Quick Assistance Subscribe now</p>
      <h1>It's Just 99/year</h1>
      <button className="btn" onClick={() => setOpenPG(true)}>
        Subscribe Now
      </button>
      {openPG && (
        <PaymentGateway openPG={openPG} amnt={99} type={TYPE.BORROWER_SUB} handleClose={handleClose} />
      )}
    </div>
  );
};

export default BorrowerSubscription;
