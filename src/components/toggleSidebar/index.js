import './styles.css';
import React, { useState, useEffect } from 'react';

export const Sidebar = ({ children }) => {
  const [xPosition, setX] = useState(-185);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-185);
    }
  };

  useEffect(() => {
    setX(0);
  }, []);

  return (
    <React.Fragment>
      <div
        className='side-bar'
        style={{
          transform: `translatex(${xPosition}px)`,
        }}>
        <button className='toggle-menu' onClick={() => toggleMenu()}></button>
        <div className='content'>{children}</div>
      </div>
    </React.Fragment>
  );
};
