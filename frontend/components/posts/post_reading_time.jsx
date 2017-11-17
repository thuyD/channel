const PostReadingTime = ({ postBody }) => {
  const postChars = postBody.length;
  const readingMins = Math.floor(postChars / 1500);
  if (readingMins <= 1) {
    return "1 min read";
  } else if (readingMins > 20){
    return "20+ min read";
  } else {
    return `${readingMins} min read`;
  }
};

export default PostReadingTime;
