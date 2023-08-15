import React from 'react';

function App() {
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 },
  ];

  // Convert the array of objects to JSON format
  const usersJson = JSON.stringify(users, null, 2);

  return (
    <div>
      <h1>Array of Objects to JSON Example</h1>
      <pre>{usersJson}</pre>
    </div>
  );
}

export default App;
