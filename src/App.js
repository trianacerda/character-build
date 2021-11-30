import './App.css';
import { useState } from 'react';
import Picker from './components/Picker/Picker.jsx';

function App() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [newPhrase, setNewPhrase] = useState('');
  const [phrase, setPhrase] = useState('');

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1> Character Builder</h1>
          <Picker
            head={head}
            onHeadChange={setHead}
            middle={middle}
            onMiddleChange={setMiddle}
            newPhrase={newPhrase}
            onNewPhraseChange={setNewPhrase}
          />
        </header>
      </main>
    </div>
  );
}

export default App;
