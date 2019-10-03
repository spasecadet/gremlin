import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

// Custom components
import Input from './Input';
import PrimaryButtonLink from './buttons/PrimaryButtonLink';
import 'react-router-dom';

// Styles
import './Search.scss';

// Icons
import searchIcon from '../images/icons/search-24px.svg';


/**
 * Search component creates a text input and button that will update the url with new params.
 * 
 * @param {Object} props 
 */
function Search(props) {
  const [searchString, setSearchString] = useState(props.initialSearchString);

  /**
   * Updates the searchString value whenever a user types in the search input.
   * 
   * @param {Event} e The event from changing the input value
   */
  const handleChangeSearch = (e) => {
    setSearchString(e.target.value);
  };

  /**
   * Get the web safe location for a new search with given search string.
   * 
   * @param {String} search The string used to match npm packages
   */
  const getUriSafeLocation = (search) => '/?search=' + encodeURIComponent(search);

  /**
   * If user hit's 'enter' on the search input treat it the same as hitting the 'Search' 
   * button and navigate to the new url.
   * 
   * @param {Event} e Event from hitting a key while focused on input
   */
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      props.history.push(getUriSafeLocation(searchString));
    }
  };

  return (
    <div className='searchContainer'>
      <div className='searchIconContainer'>
        <img src={searchIcon} className='searchIcon' alt='search' />
      </div>
      <Input 
        className='input' 
        placeholder='Search Packages' 
        value={searchString} 
        onChange={handleChangeSearch}
        onKeyDown={handleEnter}
      />
      <PrimaryButtonLink 
        className='searchButtonLink' 
        to={getUriSafeLocation(searchString)}
      >Search</PrimaryButtonLink>
    </div>
  );
}

export default withRouter(Search);
