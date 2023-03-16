import React from 'react';
import GSheetsIcon from "../../assets/sheets-icon.svg";
import TrashIcon from "../../assets/trash-icon.svg";
import './Header.css';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="gsheets-icon">
          <img className="icons" src={GSheetsIcon} alt="Google Sheets" />
        </div>
        <div className="header-text figtree-semi-bold-black-13px">
          Export to Google Sheets
        </div>
      </div>
      <div className="trash-button">
        <img className="icons" src={TrashIcon} alt="Trash" />
      </div>
    </div>
  )
}
