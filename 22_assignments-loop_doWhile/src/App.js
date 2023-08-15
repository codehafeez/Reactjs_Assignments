import React from 'react';

function App() {
  let count = 0;
  let sum = 0;

  do {
    sum += count;
    count++;
  } while (count < 5);

  return (
    <div>
      <h1>Do...while Loop Example</h1>
      <p>Sum of numbers: {sum}</p>
    </div>
  );
}

export default App;
