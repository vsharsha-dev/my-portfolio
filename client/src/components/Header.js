import React from "react";
import './Header.css';
import Button from '@mui/material/Button';

const Header = () => {
  return <header>
    <div className="header-container">
      <div className="header-img">
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/developer-19-384224.png?f=webp&w=512"></img>
      </div>
      <div className="header-buttons">
        <Button className='header-button' variant="text">Projects</Button>
        <Button className='header-button' variant="text">Blogs</Button>
        <Button className='header-button' variant="text">Contact</Button>
      </div>  
    </div>
  </header>
}

export default Header;