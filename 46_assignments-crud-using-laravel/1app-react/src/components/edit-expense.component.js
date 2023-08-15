import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditExpense extends Component {

  constructor(props) {
    super(props)
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost/laravel_reactjs/public/api/customers/' + this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          email: res.data.email
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeExpenseName(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeExpenseAmount(e) {
    this.setState({ last_name: e.target.value })
  }

  onChangeExpenseDescription(e) {
    this.setState({ email: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const expenseObject = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    };

    axios.put('http://localhost/laravel_reactjs/public/api/customers/' + this.props.match.params.id, expenseObject)
      .then((res) => {
        console.log(res.data)
        console.log('Successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Expense List 
    this.props.history.push('/expenses-listing')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>


             <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeExpenseName}/>
             </Form.Group>


             <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeExpenseAmount}/>
             </Form.Group>


            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={this.state.email} onChange={this.onChangeExpenseDescription}/>
            </Form.Group>


        <Button variant="danger" size="lg" block="block" type="submit">Update</Button>
      </Form>
    </div>);
  }
}