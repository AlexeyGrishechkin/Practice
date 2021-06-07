import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const RouteLink = ({ to, name }) => {
  return (
    <p>
      <Link className='route-link' to={to}>
        {name}
      </Link>
    </p>
  );
};
