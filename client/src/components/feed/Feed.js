import React, { useEffect } from "react";
import { loadUser } from "../../actions/auth";
import { deleteFeedById } from "../../actions/feed";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Feed = ({ data, loadUser, auth: { user }, deleteFeedById }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <div className="feed">
      {data?.user?._id === user._id && (
        <div className="dlt" onClick={() => deleteFeedById(data._id)}>
          <i className="fa fa-trash"></i>
        </div>
      )}
      <div className="row">
        <div className="pf-img">
          <i className="fa fa-user-circle"></i>
        </div>
        <div className="pf-dtls">
          <h3>{data?.user?.name?.substring(0, 4)}XXX-XXXX</h3>
          <p>{data?.date}</p>
        </div>
      </div>
      <div className="feed-bdy">Rs. {data?.amnt}/-</div>
      <div className="feed-ftr">
        <Link to="/">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-handshake-o" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="stat-lbl">{data?.status}</div>
    </div>
  );
};

Feed.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  deleteFeedById: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loadUser,
  deleteFeedById,
})(Feed);
