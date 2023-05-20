import React from "react";

const ConfirmBox = ({ toggle, handleToggleAction, msg }) => {
  return (
    toggle && (
      <div className="cnfrm-bx-wrap">
        <div className="cnfrm-bx">
          <i className="fa fa-exclamation-circle"></i>
          <h1>{msg}</h1>
          <div className="btn-grp">
            <button className="btn cnfrm" onClick={() => handleToggleAction(true)}>Yes, Do It !</button>
            <button className="btn cncl" onClick={() => handleToggleAction(false)}>No Cancel !</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmBox;
