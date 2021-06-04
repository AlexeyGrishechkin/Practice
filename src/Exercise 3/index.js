import React from 'react';

export const Input = props => {
  const { className, type, placeholder, onChange, value, name } = props;

  return (
    <>
      <input
        name={name}
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
