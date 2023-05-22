import React from 'react';
import ChevronDown from "../../assets/chevron-down.svg"
import GSheetsIcon from "../../assets/sheets-icon.svg";
import CancelIcon from "../../assets/cancel-icon.svg";
import { TabMenu } from "../TabMenu/TabMenu";
import "./ExportFile.css";

export const ExportFile = () => {
  return (
    <div className='export-file-container'>
      <div className='google-account'>
        <div className='google-account-text figtree-semi-bold-shark-11px'>
          Google Account
        </div>
        <div className='account-name'>
          <div className='name figtree-medium-shark-11px'>
            Account Name
          </div>
          <img className="icons-1" src={ChevronDown} alt="Chevron Down"/>
        </div>
      </div>
      <div className='file'>
        <div className='file-text figtree-semi-bold-shark-11px'>
          File
        </div>
        <div className='file-selector'>
          <div className='sheetname'>
            <img className='icons-1' src={GSheetsIcon} alt="GSheets"/>
            <div className='sheetname-text figtree-medium-shark-11px'>
              sheetname
            </div>
          </div>
          <div className='tab-component'>
            <div className='tab'>
              <div className='tab-one figtree-semi-bold-gunsmoke-10px'>
                Tab 1
              </div>
              <img className='icons' src={ChevronDown} alt="Chevron Down"/>
            </div>
            <img className='icons-1' src={CancelIcon} alt="Cancel"/>
          </div>
        </div>
      </div>
      <div className='export'>
        <div className='export-button'>
          <div className='export-text figtree-semi-bold-white-11px'>
            Export
            <TabMenu/>
          </div>
        </div>
        <div className='last-export figtree-medium-gunsmoke-10px'>
          Last export 14h ago
        </div>
      </div>
    </div>
  )
}
