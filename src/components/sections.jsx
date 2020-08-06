import React from 'react';
import cssModule from '../styles/sections.module.scss';
import useWindowScroll from '../hooks/window-scroll';

const Sections = () => {
  const { top } = useWindowScroll();

  const styles = () => {
    if (top) {
      return { bg: cssModule.sectionGreen };
    }
    return { bg: cssModule.sectionBlue };
  };

  return (
    <div>
      <div className={[cssModule.section, styles().bg].join(' ')}>
        <p>Section 1</p>
      </div>
      <div className={cssModule.section}>
        <p>Section 2</p>
      </div>
      <div className={[cssModule.section, styles().bg].join(' ')}>
        <p>Section 3</p>
      </div>
    </div>
  );
};

export default Sections;
