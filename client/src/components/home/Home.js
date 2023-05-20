import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { openSidebar } from "../../actions/layout";
import BorrowerHome from "../borrower/BorrowerHome";
import LenderHome from "../lender/LenderHome";
//import Ads from "../ads/Ads";

const Home = ({ auth: { user }, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Fragment>
      <div className="hme insta-an">
        {user.role.includes('user') && <BorrowerHome/>}
        {user.role.includes('lender') && <LenderHome user={user}/>}
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
