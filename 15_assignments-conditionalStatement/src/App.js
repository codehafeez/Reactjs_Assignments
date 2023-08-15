import React from 'react';

function App() {
  // If Statement
  let age = 18;
  let ageMessage = '';

  if (age >= 18) {
    ageMessage = 'You are an adult.';
  } else {
    ageMessage = 'You are not an adult yet.';
  }

  // Switch Statement
  let day = 'Monday';
  let dayMessage = '';

  switch (day) {
    case 'Monday':
      dayMessage = 'Start of the week';
      break;
    case 'Tuesday':
    case 'Wednesday':
      dayMessage = 'Midweek days';
      break;
    case 'Thursday':
      dayMessage = 'Almost there';
      break;
    case 'Friday':
      dayMessage = 'End of the workweek';
      break;
    default:
      dayMessage = 'Weekend';
  }

  // Ternary Operator
  let isAuthenticated = true;
  let authMessage = isAuthenticated ? 'Welcome!' : 'Please log in.';

  return (
    <div>
      <h1>Conditional Statements Example</h1>
      <p>If Statement: {ageMessage}</p>
      <p>Switch Statement: {dayMessage}</p>
      <p>Ternary Operator: {authMessage}</p>
    </div>
  );
}

export default App;
