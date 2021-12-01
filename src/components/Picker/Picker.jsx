import React from 'react';
// import { useState } from 'react';

export default function Picker({
  head,
  onHeadChange,
  middle,
  onMiddleChange,
  bottom,
  onBottomChange,
  phrases,
  setPhrases,
  handleClick,
}) {
  const headPictures = ['rip', 'beth', 'john', 'triana'];
  const middleOptions = ['cowboy', 'code', 'hoodie', 'kobe'];
  const bottomOptions = ['cowboy', 'rainbow', 'mc', 'gummybear'];

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
        Bottom Options
        <select value={bottom} onChange={(e) => onBottomChange(e.target.value)}>
          {bottomOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        Catch Phrase:
        <input type="text" value={phrases} onChange={(e) => setPhrases(e.target.value)} />
      </label>
      <button type="button" onClick={handleClick}>
        Add your catchphrase!
      </button>
    </>
  );
}
