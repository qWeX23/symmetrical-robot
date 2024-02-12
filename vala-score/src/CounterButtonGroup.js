// CounterButtonGroup.js
import React from 'react';
import './CounterButtonGroup.css'

function CounterButtonGroup({ value, setValue, id, label }) {
  return (<div>
    <label htmlFor={id}>{label}</label>
    <div className='form-group'>
        
        <button className='plus-button' onClick={() => setValue(value + 1)}>+</button>
        {/* <input id={id} type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} /> */}
        <div className='counter-value'>{value}</div>
        <button className='minus-button' onClick={() => setValue(value - 1)}>-</button>

    </div>
  </div>
   
    
  );
}

export default CounterButtonGroup;