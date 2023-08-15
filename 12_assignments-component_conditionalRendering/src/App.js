import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function App() {
  const user = {
    username: 'Alice',
    isLoggedIn: true,
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      <WelcomeMessage isLoggedIn={user.isLoggedIn} username={user.username} />
    </div>
  );
}

export default App;
