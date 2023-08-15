import React from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return (
    <div>
      <h1>For...of Loop Example</h1>
      <p>Sum of numbers: {sum}</p>
    </div>
  );
}

export default App;
