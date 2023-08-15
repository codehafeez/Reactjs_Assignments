import React,{Component} from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import {Provider} from './Context';
class App extends Component {
    state = {
        post_found:true,
        new_user:false
    }
    addNewUser = (id,name,email) => {
        if(this.state.post_found){
            this.setState({
                new_user:{id:id,user_name:name,user_email:email}
            });
        }
        else{
            this.setState({
                post_found:true
            });
        }
        
    }

    postShow = (show) => {
        this.setState({
            post_found:show
        })
    }
    
    render(){
        const contextValue = {
            new_user:this.state.new_user,
            addNewUser:this.addNewUser,
            post_show:this.postShow
        }

        let showUsers;
        if(this.state.post_found){
            showUsers = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UsersList/>
                    </tbody>
                </table>
            );
        }
        else{
            showUsers = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr/>
                    <p>Please Insert Some Users.</p>
                </div>
            );
        }
        return (
            <Provider value={contextValue}>
            <div className="container-fluid bg-light">
            <div className="container p-5">
                <div className="card shadow-sm">
                    <h1 className="card-header text-center text-uppercase text-muted">React PHP CRUD Application</h1>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <AddUser/>
                            </div>
                            <div className="col-md-8">
                                {showUsers}
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            </div>
        </Provider>
        );
    }
}
export default App;