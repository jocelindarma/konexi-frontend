import React from 'react';
import GSheetsIcon from "../../assets/sheets-icon.svg";
import TrashIcon from "../../assets/trash-icon.svg";
import './ExportToGSheetsHeader.css';

export const ExportToGSheetsHeader = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="gsheets-icon">
          <img className="icons" src={GSheetsIcon} alt="Google Sheets" />
        </div>
        <span className="header-text figtree-semi-bold-black-13px">
          Export to Google Sheets
        </span>
      </div>
      <div className="trash-button">
        <img className="icons" src={TrashIcon} alt="Trash" />
      </div>
    </div>
  )
}
