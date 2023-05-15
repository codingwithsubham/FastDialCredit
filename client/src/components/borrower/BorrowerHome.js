import React, { Fragment } from 'react'
import ReactStoreIndicator from "react-score-indicator";
import { Link } from 'react-router-dom'

const BorrowerHome = () => {
  return (
    <Fragment>
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
            <Link to="/create-post" className="actns-itm">
              <strong>P</strong>Personal Loan
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>B</strong>Bike Loan
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>C</strong>Car Loan
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>H</strong>Home Loan
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>T</strong>Top-up Loan
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>H</strong>Health Insurance.
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>L</strong>Life Insurance.
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>V</strong>Veinchle Insurance.
            </Link>
            <Link to="/create-post" className="actns-itm">
              <strong>T</strong>Term Insurance.
            </Link>
          </div>
        </div>
    </Fragment>
  )
}

export default BorrowerHome