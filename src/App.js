import './App.css';
import { useState } from 'react';
import Picker from './components/Picker/Picker.jsx';
import Character from './components/Character/Character.jsx';
import Display from './components/Display/Display.jsx';

function App() {
  const [head, setHead] = useState('rip');
  const [middle, setMiddle] = useState('code');
  const [bottom, setBottom] = useState('mc');
  const [newPhrase, setNewPhrase] = useState('');
  const [phrases, setPhrases] = useState([]);

  const handleClick = () => {
    setPhrases((prevState) => [...prevState, newPhrase]);
  };

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
            bottom={bottom}
            onBottomChange={setBottom}
            newPhrase={newPhrase}
            setPhrases={setNewPhrase}
            handleClick={handleClick}
          />
          <Character phrases={phrases} />
          <Display head={head} middle={middle} bottom={bottom} phrases={phrases} />
        </header>
      </main>
    </div>
  );
}

export default App;
