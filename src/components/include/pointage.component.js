import React ,{Component} from 'react';
import axios from 'axios';

export default class Pointage extends Component {
    state = {
        persons:[],
    }
    componentDidMount(){
        axios.get('http://localhost:3001/pointage').then(response =>{
            this.setState({persons: response.data});
        })
    }
    render(){
        return (
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        <h2 className="text-center">Listes Pointages</h2>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nom & prenom</th>
                                <th scope="col">Heure Arriver</th>
                                <th scope="col">heure_descente</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.persons.map(person=>(
                               <tr>
                                <th scope="row">{person.id_p}</th>
                                <td>{person.nom} {person.prenom}</td>
                                <td>{person.heure_arriver}</td>
                                <td>{person.heure_descente}</td>
                                <td>Valider</td>
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