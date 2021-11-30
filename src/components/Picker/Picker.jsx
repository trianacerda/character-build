import React from 'react';
import { useState } from 'react';

function Picker({ head }) {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');

  const headPictures = [];
  const middleOptions = [];
  return (
    <>
      <label>
        Head Options
        <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
          {headPictures.map((picture) => (
            <option key={picture}>{picture}</option>
          ))}
        </select>
      </label>

      <label>
        Middle Options
        <select value={middle} onChange={(e) => onHeadChange(e.target.value)}>
          {middleOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Picker;
