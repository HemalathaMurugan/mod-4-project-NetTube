import React from 'react';
import './App.css';
import Main from './components/Main'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Video from './components/Video'
import User from './components/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={Main}/>
          <Route path="/video/:id" component={Video}/>
          <Route path="/user" component={User}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
