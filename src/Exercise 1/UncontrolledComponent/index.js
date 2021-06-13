import React, { useRef, useState } from 'react';
import { INPUT_NAME_PARAMS, INPUT_PASSWORD_PARAMS } from '../../constants/constants';
import withFormWrapper from '../../Exercise 2';

const UncontrolledComponent = () => {
  const inputName = useRef();
  const inputPass = useRef();

  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const checkLength = (value, maxLength) => value.length < maxLength;

  const submitHandler = e => {
    e.preventDefault();

    const nameValue = inputName.current.value;
    const passwordValue = inputPass.current.value;

    const errorName = checkLength(nameValue, INPUT_NAME_PARAMS.length);
    const errorPassword = checkLength(passwordValue, INPUT_PASSWORD_PARAMS.length);

    setErrorName(errorName);
    setErrorPassword(errorPassword);

    if (errorName || errorPassword) return;
    console.log(`Login: ${nameValue}`);
    console.log(`Password: ${passwordValue}`);
    inputName.current.value = '';
    inputPass.current.value = '';
  };

  return (
    <>
      <input className='text' placeholder='username' ref={inputName} />
      {errorName && <p className='message'>Field 'username' must be more 4 characters</p>}

      <input className='password' placeholder='password' ref={inputPass} />
      {errorPassword && <p className='message'>Field 'password' must be more 6 characters</p>}

      <button onClick={submitHandler}>login</button>
    </>
  );
};

export default withFormWrapper(UncontrolledComponent);
