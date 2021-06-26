import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count % 3 === 0){
      document.title = count;
    }
  })

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default App;
