import React, { useEffect } from "react";
import Feed from "./Feed";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFeeds } from "../../actions/feed";

const FeedsLenderSpecific = ({ feed: { feeds }, getFeeds }) => {
  useEffect(() => {
    getFeeds();
  }, [getFeeds]);
  return (
    <div className="feeds">
      {feeds?.map((itm, idx) => (
        <Feed data={itm} key={idx} />
      ))}
    </div>
  );
};

FeedsLenderSpecific.propTypes = {
  feed: PropTypes.object.isRequired,
  getFeeds: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  feed: state.feed,
});

export default connect(mapStateToProps, {
  getFeeds,
})(FeedsLenderSpecific);
