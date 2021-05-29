import React from 'react';

export const Input = props => {
  const { className, type, placeholder, onChange, value, blurHandler, name } = props;

  return (
    <>
      <input
        name={name}
        onBlur={blurHandler}
        className={className}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {props.children}
    </>
  );
};
