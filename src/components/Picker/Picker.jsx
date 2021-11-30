import React from 'react';
import { useState } from 'react';

export default function Picker({
  head,
  onHeadChange,
  middle,
  onMiddleChange,
  newPhrase,
  onNewPhraseChange,
  handleClick,
}) {
  // const [head, setHead] = useState('');
  // const [middle, setMiddle] = useState('');

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
        <select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>
          {middleOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        Catch Phrase:
        <input type="text" value={newPhrase} onChange={(e) => onNewPhraseChange(e.target.value)} />
      </label>
      <button type="button" onClick={handleClick}>
        Add your catchphrase!
      </button>
    </>
  );
}
