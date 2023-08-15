import React, { useState } from 'react';

function App() {
  // State variables with different data types
  const [count, setCount] = useState(0); // Number
  const [text, setText] = useState('Hello, React!'); // String
  const [isActive, setIsActive] = useState(true); // Boolean
  const [data, setData] = useState({ name: 'John', age: 25 }); // Object
  const [list, setList] = useState(['apple', 'banana', 'cherry']); // Array

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleUpdateName = () => {
    setData({ ...data, name: 'Alice' });
  };

  return (
    <div>
      <h1>useState with Different Data Types Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <p>Text: {text}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Is Active: {isActive ? 'Yes' : 'No'}</p>
      <button onClick={handleToggle}>Toggle</button>

      <p>Data: Name: {data.name}, Age: {data.age}</p>
      <button onClick={handleUpdateName}>Update Name</button>

      <p>List: {list.join(', ')}</p>
    </div>
  );
}

export default App;
