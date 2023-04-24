import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isGreaterDate } from "../../actions/common";

const RestrictedRoute = ({
  component: Component,
  auth: { isAuthenticated, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !localStorage.token && !user ? (
        <Redirect to="/" />
      ) : user && isGreaterDate(user?.subscription?.subsEndDate) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/subscribe" />
      )
    }
  />
);

RestrictedRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(RestrictedRoute);
