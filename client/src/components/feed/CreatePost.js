import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createFeed, getFeedsByCurrentUser } from "../../actions/feed";
import Feed from "./Feed";

const CreatePost = ({ feed: { feeds }, getFeedsByCurrentUser, createFeed }) => {
  const [amnt, setAmnt] = useState(0);
  useEffect(() => {
    getFeedsByCurrentUser();
  }, [getFeedsByCurrentUser]);
  const handleChange = (e) => {
    setAmnt(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createFeed({amnt});
    setAmnt(0);
  };

  return (
    <div className="crt-pst">
      <h1>Post a Requirement</h1>
      <p>Here You can post your Requirement</p>
      <div className="pst-frm">
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <div className="inpt-group">
            <label>Enter AMount</label>
            <input
              id="amnt"
              type="number"
              name="amnt"
              value={amnt}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn">Post !</button>
        </form>
      </div>
      <div className="pst-hstry">
        <h1>Previous Posts</h1>
        <div className="feeds">
          {feeds?.map((itm, idx) => (
            <Feed data={itm} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

CreatePost.propTypes = {
  feed: PropTypes.object.isRequired,
  createFeed: PropTypes.func.isRequired,
  getFeedsByCurrentUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  feed: state.feed,
});

export default connect(mapStateToProps, {
  createFeed,
  getFeedsByCurrentUser,
})(CreatePost);
