import React from 'react';
import { useState } from 'react';

function Picker({ head }) {
  const [head, setHead] = useState('');

  const headPictures = [];
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
    </>
  );
}

export default Picker;
