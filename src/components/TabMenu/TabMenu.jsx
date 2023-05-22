import React from 'react'
import SearchIcon from "../../assets/search-icon.svg"
import CheckIcon from "../../assets/check-icon.svg"
import "./TabMenu.css";

export const TabMenu = () => {
  return (
    <div className='tab-menu figtree-medium-black-11px'>
      <div className='search-input'>
        <img className='icons' src={SearchIcon} alt="Search"/>
        <div className='search figtree-medium-gunsmoke-10px'>
          Search
        </div>
      </div>
      <div className='menu-item'>
        <div className='tab-1 figtree-medium-black-11px'>
          Tab 1
        </div>
        <img className="icons" src={CheckIcon} alt="Check"/>
      </div>
      <div className='tab-2 figtree-medium-black-11px'>
        Tab 2
      </div>
      <div className='tab-3 figtree-medium-black-11px'>
        Tab 3
      </div>
    </div>
  )
}
