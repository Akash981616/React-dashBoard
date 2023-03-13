import React from "react";
import { Outlet } from "react-router-dom";
import FunctionBar from "../components/FunctionBar/FunctionBar";
import Sidebar from "../components/Sidebar";
import TopNavBar from "../components/TopNavBar/TopNavBar";

const HomePage = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="MainDash">
        <TopNavBar />
        <FunctionBar />
        <div style={{ marginTop: 20 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
