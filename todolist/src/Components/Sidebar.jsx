import React, { useState } from "react";
import "../Styles/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { logOut } from "../Store/actions";

export const Sidebar = () => {
  const { logdata } = useSelector((state) => state.login);
  const dispatch=useDispatch();
  let handleLogout = () => {
     dispatch(logOut());
  };
  return (
    <>
      <div className="sidebar">
        <h3>User Details</h3>
        {logdata.map((el) => {
        return (
          <>
          <div>{el.name}</div>
          <div>{el.email}</div>
          <div>+91 {el.mobile}</div>
          </>);
      })}
        <Button
          onClick={handleLogout}
          variant="solid"
          sx={{
            color: "white",
            backgroundColor: "#900C3F",
            width: "50%",
            borderColor: "#900C3F",
            height: "2vw",
            marginTop:'2vw',
            "&:hover": { backgroundColor: "#a0522d" },
          }}
        >
          Logout
        </Button>
      </div>
    </>
  );
};
