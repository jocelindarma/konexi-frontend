import React from "react";
import { Header } from "../Header/Header";
import { ConnectToGoogle } from "../ConnectToGoogle/ConnectToGoogle";
import { ExportFile } from "../ExportFile/ExportFile";
import "./Block.css";

export const Block = () => {
  return (
    <div className="block-container">
      <Header />
      <ExportFile />
      {/* <ConnectToGoogle /> */}
    </div>
  );
};
