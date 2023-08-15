import React from 'react';

function App() {
  // Simple array of numbers
  const numbers = [1, 2, 3, 4, 5];

  // Array of objects representing users
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 },
  ];

  return (
    <div>
      <h1>Array Examples</h1>
      <div>
        <h2>Simple Array of Numbers</h2>
        <ul>
          {numbers.map(number => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Array of Objects</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              Name: {user.name}, Age: {user.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
