import React from 'react'  
class App extends React.Component {  
  
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
	if(this.state.username == ''){
		localStorage.clear();
	}
	else {
		localStorage.setItem('name', this.state.username);
	}
    alert("Session Value : " + localStorage.getItem('name'));	
  }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name, and submit (input change and submit envent):</p>
      <input type='text' onChange={this.myChangeHandler}/>
      <input type='submit'/>
      </form>
    );
  }


}  
export default App  