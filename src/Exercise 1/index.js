import React from 'react';
import UncontrolledComponent from './UncontrolledComponent';
import ControlledComponent from './ControlledComponent';
import './styles.css';

export const Exercise1 = () => {
  return (
    <div className='wrapper'>
      <div>
        <h2 className='title-component'>Controlled Component</h2>
        <ControlledComponent />
      </div>
      <div>
        <h2 className='title-component'>Uncontrolled Component</h2>
        <UncontrolledComponent />
      </div>
    </div>
  );
};
