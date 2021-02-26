import React from 'react';
import Nav from './components/nav.component';
import Home from './components/home.component';
// import Footer from './components/footer.component';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './components/login.component';
import PersoneList from './components/PersoneList';

function App() {
  return (
    <BrowserRouter>
       <div className="container-fluid">
        <header className="App-header">
          <Nav/>
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>
        <div>
          <PersoneList/>
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
