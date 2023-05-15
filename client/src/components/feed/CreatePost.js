import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createFeed, getFeedsByCurrentUser } from "../../actions/feed";
import Feed from "./Feed";
import { CATEGORY } from "../../common/category";

const CreatePost = ({ feed: { feeds }, getFeedsByCurrentUser, createFeed }) => {
  const [formData, setFormData] = useState({
    amnt: 0,
    cat: "",
  });

  const { amnt, cat } = formData;

  useEffect(() => {
    getFeedsByCurrentUser();
  }, [getFeedsByCurrentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createFeed(formData);
    setFormData({
      amnt: 0,
      cat: "",
    });
  };

  return (
    <div className="crt-pst insta-an">
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
          <div className="inpt-group">
            <label>Category</label>
            <select
              id="cat"
              name="cat"
              value={cat}
              onChange={(e) => handleChange(e)}
            >
              <option value="">No-Change</option>
              {CATEGORY.map((itm, idx) => (
                <option key={idx} id={itm.id} value={itm.value}>
                  {itm.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn">
            Post !
          </button>
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
