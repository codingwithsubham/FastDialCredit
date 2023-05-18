import React, { useState, Fragment, useEffect } from "react";
import { loadUser, login } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const Login = ({ loadUser, login, auth: { user, isAuthenticated, error } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const [openLogin, setOpenLogin] = useState(false);
  let dt = new Date();

  const loginToPortal = () => {
    setOpenLogin(true);
  };

  const [formdata, setFormdata] = useState({
    mobile: "",
    password: "",
  });

  const { mobile, password } = formdata;

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile && password) {
      login(formdata);
    }
  };

  if (user && isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="login-wrapper">
      {openLogin ? (
        <Fragment>
          <div className="login-screen">
            <div className="bg-login" />
            <div className="lgin-wrpr">
              <div className="title">Login</div>
              <div className="subtitle">Use your FastDial Account to Login</div>

              <form
                className="login-form insta-an"
                onSubmit={(e) => handleSubmit(e)}
              >
                {error &&
                  error.map((itm) => (
                    <div key={itm} className="error insta-slide">
                      {itm.msg} !! Please Enter Again !!
                    </div>
                  ))}
                <div className="inpt-group">
                  <label>Ph Number</label>
                  <input
                    id="mobile"
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="inpt-group">
                  <label>Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <button className="btn big">Sign in</button>
              </form>

              <div className="footer-text">
                Copyright© {dt.getFullYear()} infomatric.
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="welcome-screen">
            <div className="bg-login" />
            <img src={require('../../static/scr.png')} alt="" className="anime fade"/>
            <div className="welcome-texts insta-an">
              <div className="pre-title">Welcome to,</div>
              <div className="title">Fastdial Credit</div>
              <div className="subtitle">Connecting People with Needs</div>
              <div className="welcome-buttons">
                <button
                  className="btn lgin lgt"
                  onClick={() => loginToPortal()}
                >
                  Login
                </button>
                <Link to="/register" className="btn lgin dngr">
                  Register
                </Link>
              </div>
              <div className="helper-texts">
                Forgot Password ? <a href="/forgot-password">Click here</a> to
                Reset Password.
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loadUser,
  login,
})(Login);
