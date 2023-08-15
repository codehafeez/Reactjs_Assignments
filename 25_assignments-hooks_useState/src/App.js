import React, { useState } from 'react';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <h1>Statement Management Example</h1>
      <button onClick={handleToggle}>
        {isToggled ? 'Turn Off' : 'Turn On'}
      </button>
      <p>
        The button is {isToggled ? 'on' : 'off'}.
      </p>
    </div>
  );
}

export default App;
