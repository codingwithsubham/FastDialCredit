import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isGreaterDate } from "../../actions/common";
import LoadingPage from "../layout/LoadingPage";

const LenderRoute = ({
  component: Component,
  auth: { isAuthenticated, user, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !localStorage.token && !user ? (
        <Redirect to="/" />
      ) : localStorage.token && loading ? (
        <LoadingPage />
      ) : user && isGreaterDate(user?.subscription?.subsEndDate) ? (
        user?.role?.includes("lender") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/not-found" />
        )
      ) : (
        !loading && <Redirect to="/subscribe" />
      )
    }
  />
);

LenderRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LenderRoute);
