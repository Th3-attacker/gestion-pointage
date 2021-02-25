import React ,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class Login extends Component {
        handleSubmit= e  =>
        {
            e.preventDefault();
            const data = {
                username : this.username,
                password : this.password
            };
            axios.post('http://localhost:3001/employees/find', data).then(response =>
                {
                    console.log(response)
                }).catch((err) =>
                {
                    console.log(err)
                })
            
        }
        
    render() {
        return (
            <div className="container mt-5">
                <div className="card mx-auto" style={{width: '25rem'}}>
                    <div className="card-header text-center">
                        <h2>Login</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="form-groupe">
                                <div className="col">
                                    <label>username</label>
                                    <input type="text" name="username" className="form-control"
                                    onChange={e => this.username = e.target.value}/>
                                </div>
                                <div className="col">
                                    <label>password</label>
                                    <input type="password" name="password" className="form-control"
                                    onChange={e => this.password = e.target.value}/>
                                    
                                </div>
                                <div className="col m-2 text-center">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}