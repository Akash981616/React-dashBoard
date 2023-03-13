import React from "react";
import "./TopNavBar.css";
import { UilSearch, UilBell } from "@iconscout/react-unicons";

const TopNavBar = ({ currAppState }) => {
  return (
    <div className="main-dashBoard-container-navbar">
      <div style={{ height: "80px" }}>
        <h2 style={{ height: "20px" }}>{"Dashoard"}</h2>
        <h6 style={{ height: "20px", marginTop: "6px" }}>Admin</h6>
      </div>
      <div className="main-dashBoard-container-navbar-right">
        <div className="main-dashBoard-container-navbar-right-icons ">
          <div className="top-navbar-iocn-container">
            <UilSearch />
          </div>
          <div className="top-navbar-iocn-container">
            <UilBell />
          </div>
        </div>
        <div className="main-dashBoard-container-navbar-right-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            alt="error"
          ></img>
          <h6> Rick</h6>
          {/* <img style={{ width: "15px" }} src={DownArrow} alt="error"></img> */}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
