import React from 'react';
import './overview.css';
import profile from '../../assets/profile.png';
import matchHistory from '../../assets/matchHistory.png';
import matchSpecifics from '../../assets/matchSpecifics.png';

const card = (srcImg, cardDescription) => {
  return (
    <div className='card'>
      <h className='card-header'>{cardDescription}</h>
      <img className='card-img' src={srcImg} alt="Command Example" />
    </div>
  );
}

const Overview = () => {
  return (
    <div className='overview-bg'>
      <div className="overview-contents">
        <div className='overview-txt'>
          <h className='overview-header'>LeagueScraper</h>
          <p>A Discord Bot for retrieving and analyzing your League of Legends stats!</p>
          <div className='overview-cards'>
            {card(profile, "View Your Profile!")}
            {card(matchHistory, "View Your Match History!")}
            {card(matchSpecifics, "View Your Matches In Detail!")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;