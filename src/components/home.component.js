import React ,{Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="container" style={{padding:'10%'}}>
                <div className="card mx-auto" style={{width:'18rem'}}>
                    <div className="card-body">
                        <form action="" method="post">
                            <div>
                                <label>Matricule</label>
                                <input type="number" name="point" className="form-control"/>
                            </div>
                            <div className="d-flex justify-content-center m-2">
                                <input type="submit" name="submit" value="Pointeé" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}