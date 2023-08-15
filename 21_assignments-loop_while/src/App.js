import React from 'react';

function App() {
  let count = 0;
  let sum = 0;

  while (count < 5) {
    sum += count;
    count++;
  }

  return (
    <div>
      <h1>While Loop Example</h1>
      <p>Sum of numbers: {sum}</p>
    </div>
  );
}

export default App;
