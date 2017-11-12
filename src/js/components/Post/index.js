import React from 'react';
import PropTypes from 'prop-types';
import imagePlaceholder from '../../../img/no-image.png';

const Post = ({ author, comments, id, image, posted, title, ups, url }) => {
  let imageSrc = imagePlaceholder,
      imageStyles;

  if (image) {
    imageSrc = null;
    imageStyles = {
      backgroundImage: `url(${image})`
    };
  }

  return (
    <li className='post'>
      <img style={imageStyles} className='post-image' src={imageSrc} />
      <div className='post-content'>
        <a target='_blank' href={url} className='post-title'>{title}</a>
        <p className='post-author'>posted by {author}, {posted}</p>
        <p className='post-meta'>{ups} likes {comments} comments</p>
      </div>
    </li>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  comments: PropTypes.number,
  id: PropTypes.string,
  image: PropTypes.string,
  posted: PropTypes.string,
  title: PropTypes.string,
  ups: PropTypes.number,
  url: PropTypes.string
}

export default Post;
