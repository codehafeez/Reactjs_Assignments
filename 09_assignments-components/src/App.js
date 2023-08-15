import React from 'react';

// Functional Component
function FunctionalComponent(props) {
  return <p>Functional Component: Hello, {props.name}!</p>;
}

// Class Component
class ClassComponent extends React.Component {
  render() {
    return <p>Class Component: Hello, {this.props.name}!</p>;
  }
}

// Component with JSX
const JSXComponent = () => <p>Component with JSX: Hello, React!</p>;

// Component with Children
function ParentComponent(props) {
  return (
    <div>
      <p>Parent Component: {props.text}</p>
      {props.children}
    </div>
  );
}

// Component with Props and State
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Stateful Component: Count - {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Types of Components Example</h1>
      <FunctionalComponent name="Alice" />
      <ClassComponent name="Bob" />
      <JSXComponent />
      <ParentComponent text="Hello from Parent">
        <p>Child Component: I am a child element.</p>
      </ParentComponent>
      <StatefulComponent />
    </div>
  );
}

export default App;
