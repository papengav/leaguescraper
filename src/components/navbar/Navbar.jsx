import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

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

  const buttonClickHandler = () => {
    alert("LeagueScraper cannot be invited to Discord Servers... yet!");
  }

  return (
    <div className='navbar'>
      <div className='items'>
        <img src={logo} alt='logo' className='logo' onClick={scrollToOverview}></img>
        <p className='navbar-item' onClick={scrollToOverview}>LeagueScraper</p>
        <p className='navbar-item' onClick={scrollToAbout}>About</p>
        <p className='navbar-item' onClick={scrollToCommands}>Commands</p>
      </div>
      <button className='navbar-button' onClick={buttonClickHandler}>Get LeagueScraper</button>
    </div>
  );
}

export default Navbar;