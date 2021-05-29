import React from 'react';
import './styles.css';

const WithFormWrapper = WrapComponent => {
  return function (props) {
    return (
      <div className='login-page'>
        <div className='form'>
          <form className='login-form'>
            <WrapComponent {...props} />
          </form>
        </div>
      </div>
    );
  };
};

export default WithFormWrapper;
