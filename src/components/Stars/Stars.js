import React from 'react';

export const Starts = props => {
  let {stars} = props;
  return (
      <div className="stars">
        <span className={`fa fa-star ${stars > 0 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${stars-- && stars > 0 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${stars-- && stars > 0 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${stars-- && stars > 0 ? 'checked' : ''}`}></span>
        <span className={`fa fa-star ${stars-- && stars > 0 ? 'checked' : ''}`}></span>
      </div>
  );
}