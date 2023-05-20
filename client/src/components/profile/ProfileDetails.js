import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateLenderProf } from "../../actions/auth";

const ProfileDetails = ({ auth: { user }, updateLenderProf }) => {
  const [editWork, setEditWork] = useState(false);
  const [formData, setFormData] = useState({
    pincodes: user?.lenderData?.profData?.pincodes
      ? user?.lenderData?.profData?.pincodes?.toString()
      : "",
  });

  const { pincodes } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      profData: { pincodes: pincodes?.split(",") },
    };
    updateLenderProf({ user });
    setEditWork(false);
  };

  if (user?.lenderData?.profData && !editWork) {
    return (
      <Fragment>
        <div className="prsnl-details wrk-dtls insta-an">
          <i
            className="fa fa-pencil"
            onClick={() => setEditWork(!editWork)}
          ></i>
          <h1>Profile Details</h1>
          <p>
            <strong>Active Pin Codes:</strong>
          </p>
          <div className="pin-codes">
            {user?.lenderData?.profData?.pincodes?.map((x, i) => (
              <div key={i} className="code">
                {x}
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="kyc-form insta-an wrk-dtls">
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <h1>Profile Details</h1>
        <p>Max 10 Pincodes Allowed, Should be comma separated</p>
        <div className="inpt-group">
          <label>Pincodes</label>
          <input
            id="pincodes"
            type="text"
            name="pincodes"
            value={pincodes.replace(/\s/g, "")}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn" type="submit">
          Save
        </button>
      </form>
      <div className="pin-codes">
        {pincodes?.split(",").map((x, i) => (
          <div key={i} className="code">
            {x}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileDetails.propTypes = {
  auth: PropTypes.object.isRequired,
  updateLenderProf: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  updateLenderProf,
})(ProfileDetails);
