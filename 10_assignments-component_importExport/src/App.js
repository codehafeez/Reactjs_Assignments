import React from 'react';
import Button from './Button';
import Card from './Card';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>UI Components Example</h1>
      <Button label="Click Me" onClick={handleButtonClick} />
      <Card title="Welcome Card" content="This is a sample card." />
    </div>
  );
}

export default App;
