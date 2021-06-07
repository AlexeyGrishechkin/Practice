import React, { useState } from 'react';
import { SECONDS_IN_HOURS } from '../constants/constants';
import './styles.css';

const parseTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5);

const Timer = () => {
  const [displayTime, setDisplayTime] = useState(0);
  const [inputTime, setInputTime] = useState('');
  const [timer, setTimer] = useState();
  const [timerActive, setTimerActive] = useState(false);

  const inputHandler = ({ target: { value } }) => {
    setTimerActive(false);

    if (value < 0) {
      setInputTime(0);
      setDisplayTime(0);
      return;
    }

    if (value > SECONDS_IN_HOURS) {
      setInputTime(SECONDS_IN_HOURS);
      setDisplayTime(SECONDS_IN_HOURS);
      return;
    }

    setInputTime(value);
    setDisplayTime(value);
  };

  const resetHandler = () => {
    setDisplayTime(0);
    setInputTime(0);
    clearInterval(timer);
    setTimerActive(false);
  };

  const start = () => {
    clearInterval(timer);
    setTimerActive(!timerActive);

    if (timerActive) return;

    const newTimer = setInterval(() => {
      setDisplayTime(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(newTimer);
          setTimerActive(false);

          return prevSeconds;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    setTimer(newTimer);
  };

  return (
    <div className='container'>
      <input
        className='input-timer'
        value={inputTime}
        type='number'
        onChange={inputHandler}
        placeholder='seconds'
      />
      <div className='time'>
        <span className='second'>{parseTime(displayTime)}</span>
      </div>
      <div className='buttons'>
        <button className='start' onClick={start}>
          {timerActive ? 'stop' : 'start'}
        </button>
        <button className='reset' onClick={resetHandler}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
