import { Button } from "@material-ui/core";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content ">
        <div className="footer-content-left">
          <small>
            Lore, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
          <p> Lore, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-item">
            <Button
              style={{
                backgroundColor: "white",
                width: "230px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#00bcd4",
                marginRight: "10px",
                textShadow: "0px 1px 1px #00bcd4",
              }}
            >
              Sign up Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
