import React from 'react';

function App() {
  const hour = new Date().getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <div>
      <h1>Greeting App</h1>
      <p>{greeting}, User!</p>
    </div>
  );
}

export default App;
