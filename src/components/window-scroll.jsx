import React from 'react';
import useWindowScroll from '../hooks/window-scroll';

const WindowScroll = () => {
  const { pageYOffset, scrollDirection, top } = useWindowScroll();

  return (
    <div>
      <h1>
        Scroll <br />
        information:
      </h1>
      <small>Scroll to update information</small>
      <hr />
      <p>
        <span>pageYOffset:</span>
        <br />
        {pageYOffset}
      </p>
      <p>
        <span>scrollDirection:</span> {scrollDirection && scrollDirection}
        {!scrollDirection && 'undefined'}
      </p>
      <p>
        <span>top:</span> {top && 'true'} {!top && 'false'}
      </p>
    </div>
  );
};

export default WindowScroll;
