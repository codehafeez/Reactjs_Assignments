import React, { useState, useEffect, useContext, useRef } from 'react';

// Custom Context for sharing data
const MyContext = React.createContext();

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer Example</h2>
      <p>Time: {time} seconds</p>
    </div>
  );
}

function App() {
  const nameRef = useRef(null);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>Hooks Example</h1>
      <input
        type="text"
        ref={nameRef}
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
      <MyContext.Provider value={name}>
        <Counter />
        <Timer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
