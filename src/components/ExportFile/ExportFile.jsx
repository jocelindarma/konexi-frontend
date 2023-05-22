import React, { useState } from "react";
import ChevronDown from "../../assets/chevron-down.svg";
import GSheetsIcon from "../../assets/sheets-icon.svg";
import CancelIcon from "../../assets/cancel-icon.svg";
import { TabMenu } from "../TabMenu/TabMenu";
import "./ExportFile.css";

export const ExportFile = () => {
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);
  const [isExport, setIsExport] = useState(false);

  const handleTabMenuToggle = () => {
    setIsTabMenuOpen(!isTabMenuOpen);
  };

  const handleExportOnClick = () => {
    setIsExport(true);
  };

  return (
    <div className="export-file-container">
      <div className="google-account">
        <span className="google-account-text figtree-semi-bold-shark-11px">
          Google Account
        </span>
        <div className="account-name">
          <span className="name figtree-medium-shark-11px">Account Name</span>
          <img className="export-file-icons" src={ChevronDown} alt="Chevron Down" />
        </div>
      </div>
      <div className="file">
        <span className="file-text figtree-semi-bold-shark-11px">File</span>
        <div className="file-selector">
          <div className="sheetname">
            <img className="export-file-icons" src={GSheetsIcon} alt="GSheets" />
            <span className="sheetname-text figtree-medium-shark-11px">
              sheetname
            </span>
          </div>
          <div className="tab-component">
            <div className="tab">
              <span className="tab-one figtree-semi-bold-gunsmoke-10px">
                Tab 1
              </span>
              <img
                className="icons"
                src={ChevronDown}
                alt="Chevron Down"
                onClick={handleTabMenuToggle}
              />
            </div>
            <img className="export-file-icons" src={CancelIcon} alt="Cancel" />
          </div>
        </div>
      </div>
      <div className="export">
        <div
          className="export-button"
          onClick={handleExportOnClick}
          style={{ opacity: isTabMenuOpen ? 0.4 : 100 }}
        >
          <span className="export-text figtree-semi-bold-white-11px">
            Export
          </span>
        </div>
        {isTabMenuOpen ? <TabMenu /> : <></>}
        {isExport ? (
          <span className="last-export figtree-medium-gunsmoke-10px">
            Last export 14h ago
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
