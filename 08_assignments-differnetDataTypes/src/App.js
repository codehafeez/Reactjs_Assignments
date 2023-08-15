import React from 'react';

function DataTypeExamples() {
  // Primitive Data Types
  const stringExample = 'Hello, React!';
  const numberExample = 42;
  const booleanExample = true;
  const nullExample = null;
  let undefinedExample; // undefined

  // Reference Data Types
  const objectExample = { name: 'Alice', age: 28 };
  const arrayExample = [1, 2, 3, 4, 5];
  function functionExample() {
    console.log('Hello from a function!');
  }
  const dateExample = new Date();
  const regexExample = /[A-Za-z]+/;

  return (
    <div>
      <p>String: {stringExample}</p>
      <p>Number: {numberExample}</p>
      <p>Boolean: {booleanExample ? 'True' : 'False'}</p>
      <p>Null: {nullExample}</p>
      <p>Undefined: {undefinedExample}</p>
      <p>Object: {JSON.stringify(objectExample)}</p>
      <p>Array: {arrayExample.join(', ')}</p>
      <button onClick={functionExample}>Call Function</button>
      <p>Date: {dateExample.toDateString()}</p>
      <p>Regex Match: {regexExample.test('React') ? 'Match' : 'No Match'}</p>
    </div>
  );
}

export default DataTypeExamples;
