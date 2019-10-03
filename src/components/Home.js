import React, { useState, useEffect } from 'react';

// Custom components
import H1Title from './text/H1Title';
import H2Title from './text/H2Title';
import Loader from './Loader';
import PackageList from './PackageList';
import Search from './Search';
import SortList from './SortList';

// Styles
import './Home.scss';

/**
 * Home page/search.  Search state is kept in the URL to allow backwards and forwards navigation.
 * 
 * @param {Object} props 
 */
function Home(props) {
  const [numResults, setNumResults] = useState(0);
  const [matches, setMatches] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Get relevant query params
  const queryParams = props.location.search.substr(1).split('&');
  const queryParamsMap = {}
  queryParams.forEach((param) => {
    const entry = param.split('=');
    queryParamsMap[entry[0]] = entry[1];
  });
  const { search = '', rank = '' } = queryParamsMap;

  /**
   * Order the matches list based on a possible rank.  If there is no rank provided 
   * then use the default order provided by backend.  Used when getting a new set of 
   * results or when user changes the sort.
   *  
   * @param {String} ranking 
   * @param {Array} matchesList 
   */
  const orderAndSetMatches = (ranking, matchesList) => {
    const orderedMatches = [...matchesList];

    if (ranking !== '' && matchesList.length > 0) {
      orderedMatches.sort((a, b) => {
        let aComparator = ranking === 'optimal' ? a.score.searchScore : a.score.detail[ranking];
        let bComparator = ranking === 'optimal' ? b.score.searchScore : b.score.detail[ranking];

        return bComparator - aComparator;
      });
    }

    setMatches(orderedMatches);
  };

  // useEffect to set search results
  useEffect(() => {
    setMessage('');
    setLoading(true);

    /**
     * IFFE to request search results
     * 
     * I haven't used the fetch API a ton but it seems like you end up repeating a lot of the 
     * same stuff - async -> await -> await -> do something, plus you have to throw errors for 
     * bad responses yourself.  Long term I'd probably want to extract requests like this out 
     * to a service which would at the very least have common error throwing.
     */
    (async () => {
      if (search) {
        try {
          const response = await fetch(`https://api.npms.io/v2/search/suggestions?q=${search}`);
          const results = await response.json();
          setNumResults(results.length);
          orderAndSetMatches(rank, results);
          
          if (results.length === 0) {
            setMessage('No matching results');
          }
          
        } catch (err) {
          // There shouldn't be much of an error here since this will only run if the user is basically offline.
          setMessage(err.message);
        }
      } else {
        setMatches([]);
        setNumResults(0);
      }
    })();
    setLoading(false);
  }, [search]);

  // useEffect to update sort order of search results
  useEffect(() => {
    orderAndSetMatches(rank, matches);
  }, [rank]);

  return (
    <div className="home">
      <Search initialSearchString={decodeURIComponent(search)}></Search>
      <div>
        {message && 
          <p>{message}</p>
        }
        {numResults > 0 &&
        <>
          <div className='resultsCount'>
            <H2Title>{numResults} packages</H2Title>
          </div>
          <div className='resultsContainer'>
            <div className='sortResults'>
              <SortList currentSearch={search}></SortList>
            </div>
            <div className='resultsList'>
              <PackageList matches={matches}></PackageList>
            </div>
          </div>
        </>
        }
        {search === '' && 
        <>
          <H1Title>Don't reinvent the wheel</H1Title>
          <p>Search for plugins</p>
        </>
        }
        {loading &&
          <Loader></Loader>
        }
      </div>
    </div>
  );
}

export default Home;