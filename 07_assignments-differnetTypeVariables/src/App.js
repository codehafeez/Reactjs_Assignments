import React from 'react';

function VariableExample() {

  // Primitive Data Types
  const greeting = 'Hello';
  let age = 25;
  const isStudent = true;
  const score = null;
  let job; // Undefined

  // Reference Data Types
  const person = { name: 'Alice', age: 28 };

  const numbers = [1, 2, 3, 4, 5];

  function sayHello() {
    console.log('Hello!');
  }

  const today = new Date();

  const pattern = /[A-Za-z]+/;

  return (
    <div>
      <p>{greeting}! My name is {person.name} and I'm {age} years old.</p>
      <p>Am I a student? {isStudent ? 'Yes' : 'No'}</p>
      <p>My score: {score === null ? 'N/A' : score}</p>
      <p>My job: {job}</p>
      <p>Numbers: {numbers.join(', ')}</p>
      <button onClick={sayHello}>Say Hello</button>
      <p>Today is: {today.toDateString()}</p>
      <p>Pattern match: {pattern.test('React') ? 'Match' : 'No Match'}</p>
    </div>
  );
}

export default VariableExample;
