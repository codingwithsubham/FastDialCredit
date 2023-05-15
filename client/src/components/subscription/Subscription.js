import React, { Fragment, useState } from "react";
import BorrowerSubscription from "./BorrowerSubscription";

const Subscription = () => {
  const [isLender, setLender] = useState(false);
  const [isBorrower, setBorrower] = useState(false);

  return (
    <div className="subscribe insta-an">
      {!isBorrower && !isLender && (
        <Fragment>
          <i className="fa fa-ban danger"></i>
          <p>You haven't Subscribed, Subscribe now to Explore More !!</p>
          <h1>Subscribe As</h1>
          <div className="prfile-bdy">
            <button
              className="btn icn-btn big"
              onClick={() => setLender(!isLender)}
            >
              <i className="fa fa-shield"></i>
              <p>I give Loans/Insurance</p>
            </button>
            <button
              className="btn icn-btn big"
              onClick={() => setBorrower(!isBorrower)}
            >
              <i className="fa fa-user"></i>
              <p>I Need Loans/Insurance</p>
            </button>
          </div>
        </Fragment>
      )}
      {
        isBorrower && <BorrowerSubscription />
      }
    </div>
  );
};

export default Subscription;
