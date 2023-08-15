import React from 'react';

// User-defined function to format a message
function formatMessage(name) {
  return `Hello, ${name}! Welcome to our app.`;
}

function App() {
  const userName = 'Alice';
  const greetingMessage = formatMessage(userName);

  return (
    <div>
      <h1>User-Defined Functions Example</h1>
      <p>{greetingMessage}</p>
    </div>
  );
}

export default App;
