import React, { Component, useState, useEffect } from 'react';

// Class Component with Lifecycle Methods
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Class Component: constructor');
  }

  componentDidMount() {
    console.log('Class Component: componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Class Component: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Class Component: componentWillUnmount');
  }

  render() {
    console.log('Class Component: render');
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    );
  }
}

// Functional Component with Hooks
function FunctionalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Functional Component: componentDidMount / componentDidUpdate');
    return () => {
      console.log('Functional Component: componentWillUnmount');
    };
  }, [count]);

  console.log('Functional Component: render');

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Component Lifecycle Example</h1>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
