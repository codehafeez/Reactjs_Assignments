import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>
      <div>
        <label>Min Value: </label>
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Max Value: </label>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(parseInt(e.target.value))}
        />
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default App;
