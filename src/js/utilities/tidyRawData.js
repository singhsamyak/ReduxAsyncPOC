const REDDIT_URL = 'https://reddit.com';
const REGX_IMAGE = /\.(gif|jpg|jpeg|tiff|png)$/i;
const TITLE_MAX_CHARS = 100;

const _tidyImage = (image) => REGX_IMAGE.test(image) ? image : null;

const _getHours = (timestamp) => {
  const now = new Date().getTime();
  const posted = timestamp * 1000;
  const hours = (((now - posted) / 1000) / 60) / 60;

  let plural;
  if (hours > 24) {
    const days = Math.floor(hours / 24);
    plural = days > 1 ? 'days' : 'day';
    return `${days} ${plural} ago`;
  } else if (hours <= 24 && hours >= 1) {
    const hrs = Math.floor(hours);
    plural = hrs > 1 ? 'hours' : 'hour';
    return `${hrs} ${plural} ago`;
  } else {
    const mins = Math.floor(hours * 60);
    plural = mins > 1 ? 'mins' : min;
    return `${mins} ${plural} ago`;
  }
}

const _getTitle = (title) => title.length < TITLE_MAX_CHARS ?
    title : `${title.substr(0, TITLE_MAX_CHARS)}...`;

const _getPostUrl = (permalink) => `${REDDIT_URL}${permalink}`;

export const tidyRawData = (rawData) => {
  const posts = rawData.data.children;
  return posts.map((child) => {
    return {
      author: child.data.author,
      comments: child.data.num_comments,
      id: child.data.id,
      image: _tidyImage(child.data.thumbnail),
      posted: _getHours(child.data.created_utc),
      title: _getTitle(child.data.title),
      ups: child.data.ups,
      url: _getPostUrl(child.data.permalink)
    };
  });
}
