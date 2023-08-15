import React from 'react';
function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Greeting;
