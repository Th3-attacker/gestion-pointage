import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            username :'',
            password :'',
            role : '',
            errorStatus:false
        };
    }
    

        handleSubmit = e => 
        {
            e.preventDefault();
            axios.post('http://localhost:3001/login', {username:this.state.username, password:this.state.password})
            .then(response => 
            {
               if(response.data.role === '0')
               {
                   window.location.href='/home';
                // console.log(window.localStorage.setItem('userId',response.data.id))

               }
               else if(response.data.role === '1')
               {
                   window.location.href='/admin';
                //   console.log(window.localStorage.setItem('userId',response.data.id))

               }
            })
            .catch(error => 
            {
                    this.setState({errorStatus : error.response.data.message});                  
            })
        }
        dispalyError()
        {
            if (this.state.errorStatus) {   
                return <div className="alert alert-danger">{this.state.errorStatus}</div>
            }
        }
        isConnected(){
         axios.Cancel.fetch('http://localhost:3001/login',)   
        }
    render() {
        return (
            <div className="container mt-5">
                <div className="card mx-auto" style={{ width: '25rem' }}>
                    <div className="card-header text-center">
                        <h2>Login</h2>
                    </div>
                    {this.dispalyError()}
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="form-groupe">
                            <div className="col">
                                <label>username</label>
                                <input type="text" name="username" className="form-control"
                                    onChange={e => this.setState({username:e.target.value}) } />
                            </div>
                            <div className="col">
                                <label>password</label>
                                <input type="password" name="password" className="form-control"
                                    onChange={e => this.setState({password: e.target.value})} />
                            </div>
                            <div className="col m-2 text-center">
                                <button type="submit" className="btn btn-primary"> Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}