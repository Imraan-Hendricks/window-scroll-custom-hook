import React from 'react';
import cssModule from '../styles/fixed-component.module.scss';
import useWindowScroll from '../hooks/window-scroll';

const Sections = () => {
  const { pageYOffset, scrollDirection, top } = useWindowScroll();

  const styles = () => {
    if (top) return { p: cssModule.pTop };
    return { p: cssModule.p };
  };

  return (
    <div className={cssModule.root}>
      {scrollDirection === 'up' && (
        <div className={cssModule.box}>
          <p className={styles().p}>
            Only visible if <br /> scroll direction = up
          </p>
        </div>
      )}
      {pageYOffset > 400 && (
        <div className={cssModule.box}>
          <p className={styles().p}>
            Only visible if <br /> pageYOffset {'>'} 400
          </p>
        </div>
      )}
    </div>
  );
};

export default Sections;
