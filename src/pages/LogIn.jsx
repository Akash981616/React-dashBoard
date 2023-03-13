import React from "react";
import "./Login.css";
import avatar from "../assets/LognImage/avatar.svg";
import LoginMobile from "../assets/LognImage/LoginMobile.svg";
import { Link, useNavigate } from "react-router-dom";
const LogIn = () => {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    // event.prevent.default();
    navigate("/mycompany");
  };
  return (
    <div>
      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
        alt="error"
      />
      <div className="container">
        <div className="img">
          <img src={LoginMobile} alt="error" />
        </div>
        <div className="login-content">
          <form>
            <img src={avatar} alt="error" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="UserName" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="UserName"
                />
              </div>
            </div>
            <Link>Forgot Password?</Link>
            <input
              type="submit"
              style={{ marginLeft: 16 }}
              className="btn"
              onClick={onSubmit}
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
