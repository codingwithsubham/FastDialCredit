import React from "react";

const Ad = ({ data }) => {
  return (
    <div className="ad">
      <a href={data?.redirectUrl}>
        <img src={data?.imgUrl} alt="" />
      </a>
    </div>
  );
};

export default Ad;
