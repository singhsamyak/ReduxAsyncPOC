import React from 'react';
import PropTypes from 'prop-types';

const Oops = ({ query }) => {
  return (
    <div className='oops'>
      <p>Oops, {query} is not a subreddit...</p>
    </div>
  );
}

Oops.propTypes = {
  query: PropTypes.string.isRequired
}

export default Oops;
