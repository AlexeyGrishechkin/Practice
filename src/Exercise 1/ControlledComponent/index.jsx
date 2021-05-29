import React, { useEffect, useState } from 'react';
import WithFormWrapper from '../../Exercise 2';
import { Input } from '../../Exercise 3';

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorName, setErrorName] = useState(`Field "name" must not be empty`);
  const [errorPassword, setErrorPassword] = useState(`Field "password" must not be empty`);
  const [changeName, setChangeName] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (errorName || errorPassword) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errorName, errorPassword]);

  const handleNameChange = ({ target: { value } }) => {
    setName(value);

    const errorMessage = name.length < 4 && `Field 'username' must be more 4 characters`;

    setErrorName(errorMessage);
  };

  const handlePassChange = ({ target: { value } }) => {
    setPassword(value);

    const errorMessage = password.length < 6 && `Field 'passsword' must be more 6 characters`;

    setErrorPassword(errorMessage);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(`Login: ${name}`);
    console.log(`Password: ${password}`);

    setName('');
    setPassword('');
    setFormValid(false);
  };

  return (
    <>
      <Input
        blurHandler={setChangeName}
        type='text'
        className='text'
        placeholder='username'
        value={name}
        onChange={handleNameChange}
      >
        {changeName && <p className='message'>{errorName}</p>}
      </Input>
      <Input
        blurHandler={setChangePassword}
        className='password'
        type='password'
        placeholder='password'
        value={password}
        onChange={handlePassChange}
      >
        {changePassword && <p className='message'>{errorPassword}</p>}
      </Input>
      <button disabled={!formValid} onClick={submitHandler}>
        login
      </button>
    </>
  );
};
export default WithFormWrapper(ControlledComponent);
