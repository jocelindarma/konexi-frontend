import React from "react";
import GoogleIcon from "../../assets/google-icon.svg";
import "./ConnectToGoogle.css";

export const ConnectToGoogle = () => {
  return (
    <div className="connect-container">
      <div className="connect-body">
        <div className="google-icon">
          <img className="icons" src={GoogleIcon} alt="Google" />
        </div>
        <div className="connect-text">
          <div className="connect-text-1 figtree-semi-bold-black-13px">
            Connect Google Account
          </div>
          <p className="connect-text-2 figtree-medium-gunsmoke-11px">
            Please connect Google Account to use this block
          </p>
        </div>
      </div>
      <div className="connect-button">
        <div className="button-text figtree-semi-bold-white-10px">Connect</div>
      </div>
    </div>
  );
};
