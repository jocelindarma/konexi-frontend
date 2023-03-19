import React, {useState} from "react";
import GoogleIcon from "../../assets/google-icon.svg";
import { ConnectFlowNode } from "../ConnectFlowNode/ConnectFlowNode";
import "./ConnectToGoogle.css";

export const ConnectToGoogle = () => {
  const[connect, setConnect] = useState(false);
  
  const handleClick = () => {
    setConnect(!connect);
  }

  return (
    connect ? <ConnectFlowNode /> :
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
        <div className="button-text figtree-semi-bold-white-10px" onClick={handleClick}>Connect</div>
      </div>
    </div>
  );
};
