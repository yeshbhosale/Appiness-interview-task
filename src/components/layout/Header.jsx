import React from 'react';
import logo from '../../appiness-logo.png';

const Header = () => {
    return(
        <div className="header">
            <div className="header_logo">
                <img src={logo} alt="appiness_logo" />
            </div>
        </div>
    )
}

export default Header;