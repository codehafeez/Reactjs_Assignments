import React from 'react';

function App() {
  const textStyle = {
    color: 'blue',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textDecoration: 'underline',
    fontStyle: 'italic',
  };

  return (
    <p style={textStyle}>
      This is a styled text example.
    </p>
  );
}

export default App;
