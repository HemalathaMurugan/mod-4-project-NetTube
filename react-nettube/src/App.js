import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import Video from './components/Video'
import User from './components/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={Main}/>
          <Route path="/video" component={Video}/>
          <Route path="/user" component={User}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
