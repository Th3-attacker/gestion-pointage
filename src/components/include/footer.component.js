import React,{Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark text-center">
               <footer className="footer mt-auto py-2 bg-dark fixed-bottom">
                    <div className="container">
                        <span className="text-muted text-white">Copyright</span>
                    </div>
                </footer>
            </div>
        )
    }
}