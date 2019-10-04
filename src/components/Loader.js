import React from 'react';

// Styles
import './Loader.scss';


/**
 * Component to display a loading spinner.  This is crrently meant to be full screen 
 * under the search bar.  It may need to be modified if it was going to be a spinner for individual components.
 */
function Loader() {
  return (
    <div className='opaque'>
      <div className='loader'></div>
    </div>
  );
}

export default Loader;