import React from "react";
import { Link } from "react-router-dom";

const Ad = ({ data }) => {
  return (
    <div className="ad">
      <Link to={data?.redirectUrl}>
        <img src={data?.imgUrl} alt="" />
      </Link>
    </div>
  );
};

export default Ad;
