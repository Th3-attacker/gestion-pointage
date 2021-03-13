import React ,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default class Admin extends Component {
    state = {
        persons:[],
    }
    componentDidMount(){
        axios.get('http://localhost:3001/employees').then(response =>{
            this.setState({persons: response.data});  
        })
    }
    render()
    {
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        <h2 className="text-center">Listes Emoployeer</h2>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Fonction</th>
                                <th scope="col">Username</th>
                                <th scope="col">Adresse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.persons.map(person=>(
                               <tr key={person.id}>
                                <th scope="row">{person.id}</th>
                                <td>{person.nom}</td>
                                <td>{person.prenom}</td>
                                <td>{person.fonction}</td>
                                <td>{person.username}</td>
                                <td>{person.adresse}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>        
                    </div>
                </div>
            </div>
        )
    }
}