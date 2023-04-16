import React from 'react';
import './commands.css';

const Commands = () => {
  return (
    <div className='commands-bg'>
        <div className='commands-contents'>
          <h className='commands-header'>Commands</h>
          <table>
            <tr>
              <th className='header'>Command</th>
              <th className='header'>Parameters</th>
              <th className='header'>Description</th>
            </tr>
            <tr>
              <th className='command-name'>/profile</th>
              <th>Summoner Name, Region</th>
              <th>Get a Summoner's profile, including data such as their level, rank, and winrate</th>
            </tr>
            <tr>
              <th className='command-name'>/matches</th>
              <th>Summoner Name, Region</th>
              <th>Get a Summoner's match history, additional dropdowns allow the inspection of specific matches, and related data</th>
            </tr>
            <tr>
              <th className='command-name'>/invite</th>
              <th>None</th>
              <th>Get LeagueScraper's invite link</th>
            </tr>
            <tr>
              <th className='command-name'>/leaguescraper</th>
              <th>None</th>
              <th>Get an explanation of LeagueScraper's functionality</th>
            </tr>
            <tr>
              <th className='command-name'>More coming soon!</th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
    </div>
  );
}

export default Commands;