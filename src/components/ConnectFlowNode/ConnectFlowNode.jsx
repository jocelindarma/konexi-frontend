import React, { useState } from "react";
import NodeIcon from "../../assets/node-icon.svg";
import { ExportFile } from "../ExportFile/ExportFile";
import "./ConnectFlowNode.css";

export const ConnectFlowNode = () => {
  const [connect, setConnect] = useState(false);

  const handleClick = () => {
    setConnect(!connect);
  };

  return connect ? (
    <ExportFile />
  ) : (
    <div className="flow-node-container">
      <div className="flow-node" onClick={handleClick}>
        <img className="icons" src={NodeIcon} alt="Node Icon" />
        <p className="flow-node-text figtree-medium-shark-11px">
          Connect Flow Node to Import to Google Sheets
        </p>
      </div>
    </div>
  );
};
