import React from 'react';
import PropTypes from 'prop-types';

const NoResults = ({ subRedditTitle }) => {
  return (
    <div className='no-results'>
      <p>Sorry, nothing has been posted for <strong>{subRedditTitle}</strong> yet.</p>
    </div>
  );
}

NoResults.propTypes = {
  subRedditTitle: PropTypes.string.isRequired
}

export default NoResults;
