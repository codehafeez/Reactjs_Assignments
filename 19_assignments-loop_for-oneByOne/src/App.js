import React from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return (
    <div>
      <h1>For Loop Example</h1>
      <p>Sum of numbers: {sum}</p>
    </div>
  );
}

export default App;
