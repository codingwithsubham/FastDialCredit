import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { openSidebar } from "../../actions/layout";
import ReactStoreIndicator from "react-score-indicator";
//import Feeds from "../feed/Feeds";
import Ads from "../ads/Ads";

const Home = ({ auth: { user }, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Fragment>
      <div className="hme">
        <div className="score-indecator">
          <ReactStoreIndicator
            value={30}
            maxValue={100}
            lineGap={5}
            lineWidth={50}
            fadedOpacity={10}
          />
        </div>
        <div className="score-details">
          <div className="title">My Fastdial Score</div>
          <div className="desc">Tap here to increase your Score.</div>
          <div className="actns">
            <div className="actns-itm">
              <strong>C</strong>Check Profile
            </div>
            <div className="actns-itm">
              <strong>R</strong>Request Promise
            </div>
            <div className="actns-itm">
              <strong>A</strong>Approve Request
            </div>
          </div>
        </div>
        <div className="feed-home">
        <h1>Sponsored</h1>
          <p>Here are the Partner Companies tied up with Us </p>
          <Ads />
          {/* <h1>My Feed</h1>
          <p>Let's Find Out What's Going Over?</p>
          <Feeds /> */}
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  openSidebar,
  loadUser,
})(Home);
