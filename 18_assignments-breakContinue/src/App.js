import React from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Using break in a loop
  let sumBreak = 0;
  for (let number of numbers) {
    if (number > 5) {
      break; // Exit the loop if number > 5
    }
    sumBreak += number;
  }

  // Using continue in a loop
  let sumContinue = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      continue; // Skip even numbers
    }
    sumContinue += number;
  }

  return (
    <div>
      <h1>Loop Example</h1>
      <p>Using break: Sum of numbers up to 5 is {sumBreak}</p>
      <p>Using continue: Sum of odd numbers is {sumContinue}</p>
    </div>
  );
}

export default App;
