import React from "react";
// import UserSearchIcon from "../assets/UserSearchIcon.svg";
// import DownArrow from "../assets/downArrow.svg";
// import plusCircleICon from "../assets/plusCircle.svg";
import "./FunctionBar.css";

import { UilSearch, UilPlus } from "@iconscout/react-unicons";
import { Button } from "@mui/material";
import AddModal from "../../modal/AddModal";
const FunctionBar = (
  {
    //   title,
    //   createProfile,
    //   SetUserPageFormState,
    //   userPageFormState,
  }
) => {
  return (
    <div className="userpage-top-conatiner-utility">
      <h1>{"My Company"}</h1>

      <div className="userpage-search-filter-container">
        <div className="userpage-search-container">
          <input type="text" placeholder="Search"></input>
          <UilSearch />
        </div>
        <div>
          <AddModal />
          {/* <img src={DownArrow} alt="error"></img> */}
        </div>
        {/* {createProfile && ( */}
        {/* <button
          className="create-user-button"
          onClick={() => {
              SetUserPageFormState(`${createProfile}`);
          }}
        > */}
        {/* <img src={plusCircleICon} alt="error"></img> */}
        {/* <h3>Create {createProfile}</h3> */}
        {/* </button> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default FunctionBar;
