// CounterButtonGroup.js
import React from 'react';
import './CounterButtonGroup.css'

function CounterButtonGroup({ value, setValue, id, label }) {
  return (
    <div className='form-group'>
        <label htmlFor={id}>{label}</label>
        <div>
        <button className='plus-button' onClick={() => setValue(value + 1)}>+</button>
        <input id={id} type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        <button className='minus-button' onClick={() => setValue(value - 1)}>-</button>
        </div>
    </div>
    
  );
}

export default CounterButtonGroup;