import React from 'react';

const NotFound = (item) => {
  return (
    <div className="not-found">
      <p>{`Oops: ${item} does not exist.`}</p>
      <iframe src="https://giphy.com/embed/tfFKPmBTiwCJ2"
        width="480" height="252" frameBorder="0"
        class="giphy-embed" allowFullScreen></iframe>
    </div>
  );
};

export default NotFound;
