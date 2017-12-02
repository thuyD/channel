import React from 'react';

const NotFound = ({item}) => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <p>Oops!</p>
        <p>{`${item} does not exist...`}</p>
        <p>There is no need to be upset.</p>
        <iframe src="https://giphy.com/embed/tfFKPmBTiwCJ2"
          width="480" height="252" frameBorder="0"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default NotFound;
