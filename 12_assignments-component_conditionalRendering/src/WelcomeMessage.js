import React from 'react';

function WelcomeMessage(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h2>Welcome back, {props.username}!</h2>;
  } else {
    return <h2>Please log in.</h2>;
  }
}

export default WelcomeMessage;
