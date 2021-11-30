import logo from './logo.svg'
import './App.css'
import { useState } from 'React'

function App() {
  const [head, setHead] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="triana">
          <div value="text"></div>
        </h1>
      </header>
    </div>
  )
}

export default App
