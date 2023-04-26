import React, { useEffect } from "react";
import Ad from "./Ad";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAds } from "../../actions/ads";

const Ads = ({ ads: { ads }, getAds }) => {
  useEffect(() => {
    getAds();
  }, [getAds]);
  return (
    <div className="feeds">
      {ads?.map((itm, idx) => (
        <Ad data={itm} key={idx} />
      ))}
    </div>
  );
};

Ads.propTypes = {
  ads: PropTypes.object.isRequired,
  getAds: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  ads: state.ads,
});

export default connect(mapStateToProps, {
  getAds,
})(Ads);
