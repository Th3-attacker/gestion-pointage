import React ,{Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
        constructor(props) {
        
        super(props);
        this.state = {
            username :'',
            errorStatus:false
        };
    }
    handleSubmit = e => 
        {
            e.preventDefault();
            axios.post('http://localhost:3001/insertPointage', {username:this.state.username})
            .then(response => 
            {
                console.log(response)
            })
            .catch(error => 
            {
                    this.setState({errorStatus : error.response.data.message});                  
            })
        }
    render() {
        return (
            <div className="container" style={{padding:'10%'}}>
                <div className="card mx-auto" style={{width:'18rem'}}>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} method="post">
                            <div>
                                <label>Pseudo</label>
                                <input type="text" name="username" className="form-control"
                                onChange={e => this.setState({username:e.target.value}) } />
                            </div>
                            <div className="d-flex justify-content-center m-2">
                                <input type="submit" value="Pointeé" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}