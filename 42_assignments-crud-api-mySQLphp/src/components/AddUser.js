import React,{Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';

export default class AddUser extends Component{
    static contextType = AppContext;   
    
    insertUser = (event) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/ReactJS-php-crud-db/api/add-user.php',{
            user_name:this.username.value,
            user_email:this.useremail.value
        })
        .then(function ({data}) {
            if(data.success === 1){
                
                this.context.addNewUser(data.id,this.username.value,this.useremail.value);
                event.target.reset();
                // alert(data.msg);
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){

        return(
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Name</label>
                    <input type="text" name="username" ref={(val) => this.username = val} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Email</label>
                    <input type="email" name="useremail" ref={(val) => this.useremail = val} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Add user</button>
                </div>
            </div>
        </form>        
        );
    }
}