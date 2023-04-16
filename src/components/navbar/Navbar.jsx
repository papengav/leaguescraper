import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1044453194413129819&permissions=8&scope=bot%20applications.commands"

const Navbar = () => {
  const scrollToOverview = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth"
    });
  }

  const scrollToAbout = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    });
  }

  const scrollToCommands = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth"
    });
  }

  return (
    <div className='navbar'>
      <div className='items'>
        <img src={logo} alt='logo' className='logo' onClick={scrollToOverview}></img>
        <p className='navbar-item' onClick={scrollToOverview}>LeagueScraper</p>
        <p className='navbar-item' onClick={scrollToAbout}>About</p>
        <p className='navbar-item' onClick={scrollToCommands}>Commands</p>
      </div>
      <a href = {inviteLink} target = "_blank" rel = "noreferrer">
        <button className='navbar-button'>Get LeagueScraper</button>
      </a>
    </div>
  );
}

export default Navbar;