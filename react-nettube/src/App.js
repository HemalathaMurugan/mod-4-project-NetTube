import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import Video from './components/Video'
import User from './components/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewVideoForm from './components/NewVideoForm'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={Main}/>
          <Route path="/video" component={Video}/>
          <Route path="/user" component={User}/>
          <Route path="/addvideo" component={NewVideoForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
