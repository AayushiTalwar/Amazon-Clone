 import React from 'react'
 import './Header.css';
import SearchIcon from "@mui/icons-material";
 function Header() {
   return (
     <div className='header'>
        <img className='header__logo' src = "https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"/>
        <div className='header__search'>
            <input 
            className='header__searchInput' 
            type = "text" 
            // { /* logo */}   
            />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className='header__nav '>
            <div className="neader__option">
                <span className='header__optionLineOne'>
                    Hello Guest!
                </span>
                <span className='header__optionLineTwo'>
                    Sign In!
                </span>
            </div>
            <div className="neader__option">
                <span className='header__optionLineOne'>
                    Returns 
                </span>
                <span className='header__optionLineTwo'>
                    Orders
                </span>
                
            </div>
            <div className="neader__option">
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
        </div>
     </div>
   );
 }
 
 export default Header