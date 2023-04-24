import React from "react";

const Subscription = () => {
  return (
    <div className="subscribe">
      <i className="fa fa-ban danger"></i>
      <p>You haven't Subscribed, Subscribe now to Explore More !!</p>
      <h1>Subscribe As</h1>
      <div className="prfile-bdy">
        <div className="bdy-itm">
          <i className="fa fa-shield"></i>
          <p>As Lender</p>
        </div>
        <div className="bdy-itm">
          <i className="fa fa-user"></i>
          <p>As Borrower</p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
