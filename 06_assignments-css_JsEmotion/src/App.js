import React from 'react';
import Button from './Button';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Emotion Styled Button Example</h1>
      <Button onClick={handleButtonClick}>Click Me</Button>
    </div>
  );
}

export default App;
