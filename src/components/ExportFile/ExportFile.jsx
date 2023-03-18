import React from 'react';
import ChevronDown from "../../assets/chevron-down.svg"
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
    </div>
  )
}
