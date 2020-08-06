import React from 'react';
import cssModule from '../styles/sections.module.scss';

const Sections = () => {
  return (
    <div>
      <div className={[cssModule.section, cssModule.sectionGreen].join(' ')}>
        <p>Section 1</p>
      </div>
      <div className={cssModule.section}>
        <p>Section 2</p>
      </div>
      <div className={[cssModule.section, cssModule.sectionGreen].join(' ')}>
        <p>Section 3</p>
      </div>
    </div>
  );
};

export default Sections;
