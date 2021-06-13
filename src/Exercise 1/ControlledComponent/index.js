import React, { useEffect, useState } from 'react';
import { INPUT_NAME_PARAMS, INPUT_PASSWORD_PARAMS } from '../../constants/constants';
import { Input } from '../../Exercise 3';
import withFormWrapper from '../../Exercise 2';
import { checkInputLength } from '../../helpers/checkInputLength';

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [showFieldError, setShowFieldError] = useState(true);

  useEffect(() => {
    checkErrors();
  }, [name, password]);

  const checkErrors = () => {
    let nameMessage = checkInputLength(name, INPUT_NAME_PARAMS);

    let passwordMessage = checkInputLength(password, INPUT_PASSWORD_PARAMS);

    if (!nameMessage && !passwordMessage) {
      setShowFieldError(false);
    }

    setNameErrorMessage(nameMessage);
    setPasswordErrorMessage(passwordMessage);
  };

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handlePassChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const submitHandler = event => {
    event.preventDefault();

    console.log(`Login: ${name}`);
    console.log(`Password: ${password}`);

    setName('');
    setPassword('');
    setShowFieldError(true);
  };

  return (
    <>
      <Input
        type='text'
        className='text'
        placeholder='username'
        value={name}
        onChange={handleNameChange}>
        {showFieldError && <p className='message'>{nameErrorMessage}</p>}
      </Input>
      <Input
        className='password'
        type='password'
        placeholder='password'
        value={password}
        onChange={handlePassChange}>
        {showFieldError && <p className='message'>{passwordErrorMessage}</p>}
      </Input>
      <button disabled={showFieldError} onClick={submitHandler}>
        login
      </button>
    </>
  );
};
export default withFormWrapper(ControlledComponent);
