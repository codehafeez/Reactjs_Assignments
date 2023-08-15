import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class ExpenseTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    deleteExpense() {
        axios.delete('http://localhost/laravel_reactjs/public/api/customers/' + this.props.obj.id)
            .then((res) => {
                console.log('Removed deleted!')
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-link" to={"/edit-expense/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button style={{marginLeft:"10px"}} onClick={this.deleteExpense} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}