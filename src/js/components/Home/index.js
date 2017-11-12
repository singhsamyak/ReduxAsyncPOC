import React from 'react';
import PropTypes from 'prop-types';
import Feed from '../Feed';
import Search from '../Search';
import Throbber from '../Throbber';

const Home = ({
  loading,
  oops,
  onSearchSubmit,
  onSearchUpdate,
  posts,
  postsDisplayed,
  subRedditTitle
}) => {
  const className = postsDisplayed ? 'home searched' : 'home';
  const searchFieldProps = {
    autocomplete: 'off',
    name: 'search-field',
    onChange: onSearchUpdate,
    placeholder: 'Search for a subreddit',
    type: 'text'
  };
  let FeedDisplay = <Throbber />;
  if(!loading) {
    FeedDisplay = postsDisplayed ?
      <Feed oops={oops} posts={posts} subRedditTitle={subRedditTitle}/> :
      null;
  }

  return (
    <div className={className}>
      <Search
        onSubmit={onSearchSubmit}
        inputFieldProps={searchFieldProps} />
      { FeedDisplay }
    </div>
  );
}

Home.propTypes = {
  loading: PropTypes.bool,
  oops: PropTypes.bool,
  onSearchSubmit: PropTypes.func,
  posts: PropTypes.array,
  searchFieldProps: PropTypes.object,
  searchButtonProps: PropTypes.object,
  subRedditTitle: PropTypes.string
}

export default Home;
