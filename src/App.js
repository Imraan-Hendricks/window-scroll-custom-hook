import React from 'react';
import FixedComponent from './components/fixed-component';
import Sections from './components/sections';
import WindowScroll from './components/window-scroll.jsx';

const App = () => {
  return (
    <div>
      <FixedComponent />
      <Sections />
      <WindowScroll />
    </div>
  );
};

export default App;
