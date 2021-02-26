import React ,{Component} from 'react';
import axios from 'axios';

export default class PersoneList extends Component {
    state = {
        persons:[],
    };
    componentDidMount()
    {
        axios.get('http://localhost:3001/employees')
        .then(response=> {
            this.setState({persons: response.data});
        })
    }
    render() {
        return (
       <ul>
           {this.state.persons.map(person=><li>{person.username}</li>)}
       </ul>
        )
    }
}