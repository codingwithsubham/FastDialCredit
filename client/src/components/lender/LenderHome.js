import React from "react";
import FeedsLenderSpecific from "../feed/FeedsLenderSpecific";

const LenderHome = ({ user }) => {
  return (
    <div className="lndr-wraper">
      <div className="info-card">
        <h2>Active Pincodes</h2>
        <div className="pin-codes">
          {user?.lenderData?.profData?.pincodes?.map((x, i) => (
            <div key={i} className="code">
              {x}
            </div>
          ))}
        </div>
      </div>
      <div className="feed-wrap">
        <h2>What's Around You ?</h2>
        <FeedsLenderSpecific />
      </div>
    </div>
  );
};

export default LenderHome;
