import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createAd, getAds } from "../../actions/ads";
import AD from "./Ad";

const CreateAds = ({ ads: { ads }, getAds, createAd }) => {
  const [formData, setFormData] = useState({
    imgUrl: "",
    redirectUrl: "",
  });

  const { imgUrl, redirectUrl } = formData;

  useEffect(() => {
    getAds();
  }, [getAds]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAd(formData);
    setFormData({
      imgUrl: "",
      redirectUrl: "",
    });
  };

  return (
    <div className="crt-pst">
      <h1>Post a Ad</h1>
      <p>Here You can Create Ads</p>
      <div className="pst-frm">
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <div className="inpt-group">
            <label>Enter Image Url</label>
            <input
              id="imgUrl"
              type="text"
              name="imgUrl"
              value={imgUrl}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="inpt-group">
            <label>Enter Redirect Url</label>
            <input
              id="redirectUrl"
              type="text"
              name="redirectUrl"
              value={redirectUrl}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn">
            Post !
          </button>
        </form>
      </div>
      <div className="pst-hstry">
        <h1>Previous Ads</h1>
        <div className="feeds">
          {ads?.map((itm, idx) => (
            <AD data={itm} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

CreateAds.propTypes = {
  ads: PropTypes.object.isRequired,
  createAd: PropTypes.func.isRequired,
  getAds: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  ads: state.ads,
});

export default connect(mapStateToProps, {
  createAd,
  getAds,
})(CreateAds);
