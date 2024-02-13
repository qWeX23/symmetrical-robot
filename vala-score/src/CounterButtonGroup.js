import React, { useState, useEffect, useRef } from 'react';
import './CounterButtonGroup.css'

const INTERVAL_DELAY = 150;

function CounterButtonGroup({ value, setValue, id, label }) {
  const [intervalId, setIntervalId] = useState(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  }, []);

  const startIncrement = () => {

    if (isMounted.current) {
      clearInterval(intervalId);
      setIntervalId(
        setInterval(() => {
          setValue(prevValue => prevValue + 1)
      }, INTERVAL_DELAY));
    }
  };

  const startDecrement = () => {
    if (isMounted.current) {
      clearInterval(intervalId);
      setIntervalId(
        setInterval(() => {
          setValue(prevValue => prevValue - 1)
        }, INTERVAL_DELAY));
    }
  };

  const stopChanging = () => {
    if (isMounted.current) {
      clearInterval(intervalId);
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className='form-group'>
      <button
          className='minus-button'
          onMouseDown={startDecrement}
          onMouseUp={stopChanging}
          onMouseLeave={stopChanging}
          onTouchStart={startDecrement}
          onTouchEnd={stopChanging}
          onClick={() => setValue(prevValue => prevValue - 1)}
        >
          -
        </button>
        <div className='counter-value'>{value}</div>
        <button
          className='plus-button'
          onMouseDown={startIncrement}
          onMouseUp={stopChanging}
          onMouseLeave={stopChanging}
          onTouchStart={startIncrement}
          onTouchEnd={stopChanging}
          onClick={() => setValue(prevValue => prevValue + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterButtonGroup;