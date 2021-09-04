import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Button } from "@material-ui/core";
import "./Hometop.css";

const Hometop = () => {
  return (
    <div
      style={{
        color: "white",
        flex: 0.1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
        backgroundColor: "#1a1a1a",
      }}
    >
      <div>
        <ArrowBackIosIcon className="arrow" />
        <ArrowForwardIosIcon className="arrow" />
      </div>
      <div>
        <Button
          className="button"
          style={{
            width: "130px",
            borderRadius: "20px",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          SIgn up
        </Button>
        <Button
          className="button"
          style={{
            backgroundColor: "White",
            marginLeft: "10px",
            marginRight: "20px",
            width: "130px",
            borderRadius: "20px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Hometop;