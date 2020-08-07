import React from 'react';
import cssModule from '../styles/window-scroll.module.scss';
import useWindowScroll from '../hooks/window-scroll';

const WindowScroll = () => {
  const { pageYOffset, scrollDirection, top } = useWindowScroll();

  const styles = () => {
    if (top) {
      return {
        h1: cssModule.h1Top,
        span: cssModule.spanTop,
        hr: cssModule.hrTop,
      };
    }
    return {
      h1: cssModule.h1,
      span: cssModule.span,
      hr: cssModule.hr,
    };
  };

  return (
    <div className={cssModule.root}>
      <h1 className={styles().h1}>
        Scroll <br />
        information:
      </h1>
      <small>Scroll to update information</small>
      <hr className={styles().hr} />
      <p>
        <span className={styles().span}>pageYOffset:</span>
        <br />
        {pageYOffset}
      </p>
      <p>
        <span className={styles().span}>scrollDirection:</span>{' '}
        {scrollDirection && scrollDirection}
        {!scrollDirection && 'undefined'}
      </p>
      <p>
        <span className={styles().span}>top:</span> {top && 'true'}{' '}
        {!top && 'false'}
      </p>
    </div>
  );
};

export default WindowScroll;
