import React, { useState, useEffect } from 'react';

// Custom components
import H4Title from './text/H4Title';
import StatsList from './StatsList';

// Services
import { brandColors, brandColorKeys } from '../services/lookupService';

// Styles
import './PackageListElement.scss';

// Icons
import accountIcon from '../images/icons/account_box-24px.svg';


/**
 * PackageListElement used to display details about an npm package.
 * 
 * @param {Object} props 
 */
function PackageListElement(props) {
  const { name, description, publisher, date, version, links } = props.match.package;
  const [avatarSource, setAvatarSource] = useState(accountIcon);

  const formattedDate = new Date(date).toLocaleDateString('us-EN', { year: 'numeric', month: 'long', day: 'numeric' });

  // Build scoresMap to display usage/support stats.
  const scores = props.match.score.detail;
  const scoresKeys = Object.keys(scores);
  const scoresMap = scoresKeys.map((scoreKey, i) => {
    return {
      descriptiveTitle: scoreKey,
      title: scoreKey.substr(0, 1),
      value: scores[scoreKey],
      color: brandColors[brandColorKeys[i]],
    }
  });

  // useEffect to get avatar for user.  Currently only supports github user icons.  
  // Shows default account icon otherwise
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${publisher.username}`);
        
        if (response.ok) {
          const result = await response.json();
          setAvatarSource(result.avatar_url);
        }
      } catch (err) {
        // Probably won't ever do anything on error since there's a default icon.
      }
    })();
  });
  
  return (
    <div className='packageListElement'>
      <div className='details'>
        <H4Title><a className='packageLink' href={links.npm}>{name}</a></H4Title>
        <p>{description}</p>
        <div>
          <img className='avatar' src={avatarSource} alt={`${publisher.username} avatar`} />
          <div className='data'>{publisher.username}</div>
          <div className='data'>published {version} on {formattedDate}</div>
        </div>
      </div>
      <StatsList className='statsList' statistics={scoresMap}></StatsList>
    </div>
  );
}

export default PackageListElement;
