import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateLenderWork } from "../../actions/auth";

const BankDetails = ({ auth: { user }, updateLenderWork }) => {
  const [editWork, setEditWork] = useState(false);
  const [formData, setFormData] = useState({
    orgName: user?.lenderData?.workData?.orgName
      ? user?.lenderData?.workData?.orgName
      : "",
    designation: user?.lenderData?.workData?.designation
      ? user?.lenderData?.workData?.designation
      : "",
    dept: user?.lenderData?.workData?.dept
      ? user?.lenderData?.workData?.dept
      : "",
  });

  const { orgName, designation, dept } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      workData: formData,
    };
    updateLenderWork({ user });
    setEditWork(false);
  };

  if (user?.lenderData?.workData && !editWork) {
    return (
      <Fragment>
        <div className="prsnl-details wrk-dtls insta-an">
          <i
            className="fa fa-pencil"
            onClick={() => setEditWork(!editWork)}
          ></i>
          <h1>Work Details</h1>
          <p>
            <strong>Working Department:</strong>
            {user?.lenderData?.workData?.dept}
          </p>
          <p>
            <strong>Organisation Name:</strong>
            {user?.lenderData?.workData?.orgName}
          </p>
          <p>
            <strong>Designation:</strong>
            {user?.lenderData?.workData?.designation}
          </p>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="kyc-form insta-an wrk-dtls">
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <h1>Work Details</h1>
        <div className="inpt-group">
          <label>Organisation Name</label>
          <input
            id="orgName"
            type="text"
            name="orgName"
            value={orgName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="inpt-group">
          <label>Designation</label>
          <input
            id="designation"
            type="text"
            name="designation"
            value={designation}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="inpt-group">
          <label>Working Department</label>
          <input
            id="dept"
            type="text"
            name="dept"
            value={dept}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

BankDetails.propTypes = {
  auth: PropTypes.object.isRequired,
  updateLenderWork: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  updateLenderWork,
})(BankDetails);
