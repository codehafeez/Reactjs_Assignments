import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Passing Props Example</h1>
      <Greeting name="Alice" message="Welcome to React!" />
      <Greeting name="Bob" message="Enjoy coding!" />
    </div>
  );
}

export default App;
