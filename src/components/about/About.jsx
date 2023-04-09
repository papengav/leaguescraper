import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about-bg'>
      <div className='about-contents'>
        <h className='about-header'>About</h>
        <p className='about-txt'>LeagueScraper is a Discord bot for retrieving and analyzing your League of Legends stats. LeagueScraper gets Summoner and Match data directly from Riot, and brings it to you, eliminating the need for 3rd party apps. All the better to help you up your game! If you have any bug reports, suggestions, or anything else you want to chat to the dev about, feel free to dm #Azzen4343</p>
      </div>
    </div>
  );
}

export default About;