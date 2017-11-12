import React from 'react';
import PropTypes from 'prop-types';
import Oops from './lib/Oops';
import Posts from './lib/Posts';
import NoResults from './lib/NoResults';

const Feed = ({ subRedditTitle, posts, oops }) => {
  const SearchResults = posts.length > 0 ?
    <Posts subRedditTitle={subRedditTitle} posts={posts}/> :
    <NoResults subRedditTitle={subRedditTitle}/>;

  const content = oops ? <Oops query={subRedditTitle}/> : SearchResults;

  return (
    <section className='feed'>
      { content }
    </section>
  );
}

Feed.propTypes = {
  oops: PropTypes.bool,
  posts: PropTypes.array,
  subRedditTitle: PropTypes.string
}

export default Feed;
