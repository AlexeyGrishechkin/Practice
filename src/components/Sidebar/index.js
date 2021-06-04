import React, { useState, useEffect } from 'react';
import './styles.css';
import { SIDEBAR_WIDTH } from '../Constants';

export const Sidebar = ({ children }) => {
  const [xPosition, setX] = useState(SIDEBAR_WIDTH);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(SIDEBAR_WIDTH);
    }
  };

  useEffect(() => {
    setX(0);
  }, []);

  return (
    <div
      className='side-bar'
      style={{
        transform: `translatex(${xPosition}px)`,
      }}
    >
      <button className='toggle-menu' onClick={() => toggleMenu()}></button>
      <div className='content'>{children}</div>
    </div>
  );
};
