import React from "react";

const Feed = ({ data }) => {
  return (
    <div className="feed">
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
        <button className="btn">Contact</button>
      </div>
    </div>
  );
};

export default Feed;
