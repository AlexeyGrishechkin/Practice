import React, { useEffect, useState } from 'react';
import { MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from '../../components/Constants';
import { Input } from '../../Exercise 3';
import withFormWrapper from '../../Exercise 2';

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showNameFieldError, setShowNameFieldError] = useState(true);
  const [showPasswordFieldError, setShowPasswordFieldError] = useState(true);

  useEffect(() => {
    let nameMessage = name.length < MIN_NAME_LENGTH && 'Field "username" must be more 4 characters';
    let passwordMessage =
      password.length < MIN_PASSWORD_LENGTH && 'Field "passsword" must be more 6 characters';

    if (name.length === 0) nameMessage = 'Field "name" must not be empty';
    if (password.length === 0) passwordMessage = 'Field "password" must not be empty';

    setShowNameFieldError(nameMessage);
    setShowPasswordFieldError(passwordMessage);
  }, [name, password]);

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handlePassChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(`Login: ${name}`);
    console.log(`Password: ${password}`);

    setName('');
    setPassword('');
    setShowNameFieldError(true);
    setShowPasswordFieldError(true);
  };

  return (
    <>
      <Input
        type='text'
        className='text'
        placeholder='username'
        value={name}
        onChange={handleNameChange}
      >
        <p className='message'>{showNameFieldError}</p>
      </Input>
      <Input
        className='password'
        type='password'
        placeholder='password'
        value={password}
        onChange={handlePassChange}
      >
        <p className='message'>{showPasswordFieldError}</p>
      </Input>
      <button disabled={showNameFieldError || showPasswordFieldError} onClick={submitHandler}>
        login
      </button>
    </>
  );
};
export default withFormWrapper(ControlledComponent);
