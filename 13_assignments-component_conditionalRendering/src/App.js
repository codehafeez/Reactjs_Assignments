import React from 'react';

function WelcomeUser(props) {
  return <h2>Welcome, {props.username}!</h2>;
}

function LoginForm(props) {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}

function App() {
  const user = {
    username: 'Alice',
    isLoggedIn: false,
  };

  return (
    <div>
      <h1>Conditional Component Rendering Example</h1>
      {user.isLoggedIn ? (
        <WelcomeUser username={user.username} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
