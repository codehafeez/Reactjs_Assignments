import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import ExpensesList from './expenses-listing.component';
import Swal from 'sweetalert2';


export default class CreateExpense extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    }
  }

  onChangeExpenseName(e) {
    this.setState({first_name: e.target.value})
  }

  onChangeExpenseAmount(e) {
    this.setState({last_name: e.target.value})
  }

  onChangeExpenseDescription(e) {
    this.setState({email: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const expense = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    };
    axios.post('http://localhost/laravel_reactjs/public/api/customers', expense)
      .then(res => console.log(res.data));

      Swal.fire('Good job!', 'Added Successfully','success')
      this.setState({first_name: '', last_name: '', email: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 

            <Col>
             <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeExpenseName}/>
             </Form.Group>            
            </Col>
            
            <Col>
             <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeExpenseAmount}/>
             </Form.Group>
            </Col>  

            <Col>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={this.state.email} onChange={this.onChangeExpenseDescription}/>
        </Form.Group>
            </Col>  
           
        </Row>
            


       
        <Button variant="primary" size="lg" block="block" type="submit">
          Add
        </Button>
      </Form>
      <br></br>
      <br></br>

      <ExpensesList> </ExpensesList>
    </div>);
  }
}




