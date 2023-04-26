import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import Alert from "../layout/Alert";
import ScrollToTop from "../../ScrollToTop";
import PrivateRoute from "./PrivateRoute";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import RestrictedRoute from "./RestrictedRoute";
import Subscription from "../subscription/Subscription";
import CreatePost from "../feed/CreatePost";
import CreateAds from "../ads/CreateAds";

const Routes = ({ layout: { isSidebarOpen } }) => {
  return (
    <div
      id="main"
      style={isSidebarOpen ? { marginLeft: "20%" } : { marginLeft: "0%" }}
    >
      <Alert />
      <ScrollToTop />
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/subscribe" component={Subscription} />
        <PrivateRoute exact path="/create-ads" component={CreateAds} />
        <RestrictedRoute exact path="/profile" component={Profile} />
        <RestrictedRoute exact path="/create-post" component={CreatePost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

Routes.propTypes = {
  auth: PropTypes.object.isRequired,
  layout: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  layout: state.layout,
});

export default connect(mapStateToProps, {})(Routes);
