import React, { useState } from 'react';

function App() {
  // State for the count
  const [count, setCount] = useState(0);

  // State for input value
  const [inputValue, setInputValue] = useState('');

  // State for showing/hiding message
  const [showMessage, setShowMessage] = useState(false);

  // Array of items
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  // Function to handle increment
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to show/hide message
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1>All-in-One Example</h1>
      
      {/* State and Events */}
      <div>
        <h2>State and Events</h2>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      
      {/* Conditional Rendering */}
      <div>
        <h2>Conditional Rendering</h2>
        <button onClick={toggleMessage}>Toggle Message</button>
        {showMessage && <p>This message is shown conditionally.</p>}
      </div>
      
      {/* Rendering Lists */}
      <div>
        <h2>Rendering Lists</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      {/* Input Handling */}
      <div>
        <h2>Input Handling</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <p>You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default App;
