import React from 'react';
import PropTypes from 'prop-types';
import Post from '../../Post';

const Posts = ({ posts, subRedditTitle }) => {
  return (
    <div className='posts'>
      <p>Search results for <strong>{subRedditTitle}</strong>...</p>
      <ul>
        {
          posts.map((postProps) => <Post key={postProps.id} {...postProps}/>)
        }
      </ul>
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  subRedditTitle: PropTypes.string.isRequired
}

export default Posts;
