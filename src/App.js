import React from 'react';
import Nav from './components/include/nav.component';
import Footer from './components/include/footer.component';
import Login from './components/include/login.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/admin/admin_panel.component';
import Home from './components/include/home.component';
import Logout from './components/include/logout.component';
import Pointage from './components/include/pointage.component';
import Acceuil from './components/acceuil.component';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <header className="App-header">
          <Nav />
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Acceuil} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/pointage" component={Pointage} />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
