import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { openSidebar } from "../../actions/layout";
import ReactStoreIndicator from "react-score-indicator";

const Home = ({ auth: { user } }) => {
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
          <div className="dtls">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
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
