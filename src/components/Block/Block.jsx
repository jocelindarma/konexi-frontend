import React from "react";
import { ExportToGSheetsHeader } from "../ExportToGSheetsHeader/ExportToGSheetsHeader";
import { ConnectToGoogle } from "../ConnectToGoogle/ConnectToGoogle";
import "./Block.css";

export const Block = () => {
  return (
    <div className="block-container">
      <ExportToGSheetsHeader />
      <ConnectToGoogle />
    </div>
  );
};
