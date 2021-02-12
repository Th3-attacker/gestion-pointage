import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
}

 login() {
    console.log("login function");
}
 onChange(e) {
    this.setState({[e.target.name] :e.target.value});
}
    render() {
        return (
        <div className="card m-auto">
            <div className="card-header">
                <h3>Login</h3>
            </div>
            <div className="card-body">
                <form>
                    <label>username</label>
                    <input type="text" name="username" className="form-control" onChange={this.onChange}/>
                    <label>password</label>
                    <input type="password" name="password" className="form-control" onChange={this.onChange}/>
                    <div className="">
                    <input type="submit" name="submit" value="Connecter" className="btn btn-primary " onClick={this.login}/>
                    </div>
                </form>
            </div>
        </div>
        )
    };
}
export default Login;