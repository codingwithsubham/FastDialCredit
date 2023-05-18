import React, { useEffect, useState } from "react";
import { loadUser } from "../../actions/auth";
import { deleteFeedById } from "../../actions/feed";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmBox from "../layout/ConfirmBox";

const Feed = ({ data, loadUser, auth: { user }, deleteFeedById }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  const [toggle, setToggle] = useState(false);
  const handleToggleAction = (action) => {
    action ? deleteFeedById(data._id) : setToggle(!toggle);
  }
  return (
    <div className="feed">
      {data?.user?._id === user._id && (
        <div className="dlt" onClick={() => setToggle(!toggle)}>
          <i className="fa fa-trash"></i>
        </div>
      )}
      <ConfirmBox toggle={toggle} handleToggleAction={handleToggleAction}/>
      <div className="stat-lbl">{data?.status}</div>
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
      <div className="feed-desc">
        <p>{data?.category} | Pin - {data?.pin}</p>
      </div>
      <div className="feed-ftr">
        <Link to="/">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-handshake-o" aria-hidden="true"></i>
        </Link>
      </div>
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
