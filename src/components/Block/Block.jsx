import React from "react";
import { Header } from "../Header/Header";
import { ConnectToGoogle } from "../ConnectToGoogle/ConnectToGoogle";
import "./Block.css";

export const Block = () => {
  return (
    <div className="block-container">
      <Header />
      <ConnectToGoogle />
    </div>
  );
};
