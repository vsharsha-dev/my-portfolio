import React from "react";
import './styles/Header.css';
import Button from '@mui/material/Button';
import {Link} from'react-router-dom';

const Header = () => {
  return <header>
    <nav className="header-container">
      <div className="header-img">
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/developer-19-384224.png?f=webp&w=512" alt="page-logo"></img>
      </div>
      <div className="header-title">
        <p className="title">Harsha's Portfolio</p>
      </div>
      <div className="header-buttons">
        <Link to="/"><Button className='header-button' variant="text">Home</Button></Link>
        <Link to="/projects"><Button className='header-button' variant="text">Projects</Button></Link>
        <Link to="/blogs"><Button className='header-button' variant="text">Blogs</Button></Link>
        <Link to="/contact"><Button className='header-button' variant="text">Contact</Button></Link>
      </div>
    </nav>
  </header>
}

export default Header;