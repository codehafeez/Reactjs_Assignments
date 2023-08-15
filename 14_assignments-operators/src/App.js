import React from 'react';

function App() {
  // Arithmetic Operators
  let x = 10;
  let y = 5;

  // Comparison Operators
  let a = 10;
  let b = 5;

  // Logical Operators
  let p = true;
  let q = false;

  // Assignment Operators
  let num = 10;

  // Ternary Operator
  let age = 18;
  let message = age >= 18 ? 'You are an adult' : 'You are not an adult';

  // String Concatenation Operator
  let firstName = 'John';
  let lastName = 'Doe';
  let fullName = firstName + ' ' + lastName;

  return (
    <div>
      <h1>Operators Example in React</h1>
      <p>Arithmetic Operators: {x + y}, {x - y}, {x * y}, {x / y}, {x % y}, {x ** y}</p>
      <p>Comparison Operators: {a > b}, {a < b}, {a >= b}, {a <= b}, {a === b}, {a !== b}</p>
      <p>Logical Operators: {p && q}, {p || q}, {!p}</p>
      <p>Assignment Operators: {num += 5}, {num -= 3}, {num *= 2}, {num /= 4}, {num %= 3}</p>
      <p>Ternary Operator: {message}</p>
      <p>String Concatenation Operator: {fullName}</p>
    </div>
  );
}

export default App;
