import React, { useState, useEffect } from 'react';
import './styles.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [minute, setMinute] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    getMinuteFromSeconds(seconds);
    checkMinutes(seconds, minute);
    tick(seconds, timerActive);
    finishTimer(seconds, minute);
  }, [minute, seconds, timerActive]);

  const getMinuteFromSeconds = seconds => {
    if (seconds > 60) {
      setMinute(Math.floor(seconds / 60));
      setSeconds(seconds % 60);
    }
  };

  const checkMinutes = (seconds, minute) => {
    if (seconds === 0 && minute !== 0) {
      setSeconds(60);
      setMinute(minute - 1);
    }
  };

  const tick = (seconds, timerActive) => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    }
  };

  const finishTimer = (minute, seconds) => {
    if (minute === 0 && seconds === 0) {
      setTimerActive(false);
    }
  };

  const inputSeconds = ({ target: { value } }) => {
    if (value < 0) {
      setShowError(true);
      setTimerActive(false);
    } else {
      setShowError(false);
      setSeconds(value);
    }
  };

  let currentSecond = seconds;
  if (currentSecond < 10) {
    currentSecond = `0${seconds}`;
  }

  return (
    <div className='container'>
      <input className='input-timer' onChange={inputSeconds} placeholder='seconds' />
      {showError && <p className='error'>The value must not be negative</p>}
      <div className='time'>
        <span className='minute'>{minute}</span>
        <span>:</span>
        <span className='second'>{currentSecond}</span>
      </div>
      <div className='buttons'>
        <button className='start' onClick={() => setTimerActive(!timerActive)}>
          {timerActive ? 'stop' : 'start'}
        </button>
        <button
          className='reset'
          onClick={() => {
            return setMinute(0) || setSeconds(0);
          }}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
