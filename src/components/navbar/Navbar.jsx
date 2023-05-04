import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=1044453194413129819&permissions=8&scope=bot%20applications.commands"
const botRepoLink = 'https://github.com/papengav/LeagueScraperDiscordBot'
const websiteRepoLink = 'https://github.com/papengav/leaguescraper'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='items'>
        <img src={logo} alt='logo' className='logo'></img>
        <p className='navbar-item'>LeagueScraper</p>
        <p className='navbar-item'>About</p>
        <p className='navbar-item'>Commands</p>
        <div className='src-dropdown'>
          <button className='src-btn'>Source Code</button>
          <div className='src-dropdown-content'>
            <a href= {botRepoLink} >Discord Bot</a>
            <a href= {websiteRepoLink} >Website</a>
          </div>
        </div>
        <p className='src-arrow'>▼</p>
      </div>
      <a href = {inviteLink} target = "_blank" rel = "noreferrer">
        <button className='navbar-button'>Get LeagueScraper</button>
      </a>
    </div>
  );
}

export default Navbar;