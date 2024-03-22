import React from 'react';
import DateTimePicker from './DateTimePicker';

const InputForm = ({ targetDate, onInputChange, onStartCountdown, onStopCountdown, isCountdownRunning }) => {
  return (
    <div className="input-form">
      <DateTimePicker value={targetDate} onChange={onInputChange} />
      <br/>
      {isCountdownRunning ? (
        <button style={{margin:"1rem"}} onClick={onStopCountdown}>Cancel Timer</button>
      ) : (
        <button style={{margin:"1rem"}} onClick={onStartCountdown}>Start Timer</button>
      )}
    </div>
  );
};

export default InputForm;
