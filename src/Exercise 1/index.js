import React from 'react';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';
import './styles.css';

export const Exercise1 = () => {
  return (
    <div className='wrapper'>
      <div>
        <h6 className='TitleComponent'>Controlled Component</h6>
        <ControlledComponent />
      </div>
      <div>
        <h6 className='TitleComponent'>Uncontrolled Component</h6>
        <UncontrolledComponent />
      </div>
    </div>
  );
};
