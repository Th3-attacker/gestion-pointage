import React ,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

export default class Navadmin extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    Gestion De Pointage
                </Link>
                <Link className="navbar-brand" to={'/logout'}><i className="fa fa-user"></i>logout</Link>
            </div>
        </nav>
        )
    }
}