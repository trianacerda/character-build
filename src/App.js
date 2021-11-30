import './App.css';
import { useState } from 'react';
import Picker from './components/Picker/Picker.jsx';

function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1> Character Builder</h1>
        <Picker head={head} onHeadChange={setHead} middle={middle} onMiddleChange={setMiddle} />
      </header>
    </div>
  );
}

export default App;
