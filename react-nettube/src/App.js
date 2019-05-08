import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import Video from './components/Video'
import User from './components/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const videos = [
    { title: "Javascript", language: "Javascript" },
    { title: "Javascript", language: "Javascript" },
    { title: "Ruby", language: "Ruby" },
    { title: "Ruby", language: "Ruby" },
    { title: "Rails", language: "Rails" },
    { title: "Rails", language: "Rails" },
    { title: "React", language: "React" },
    { title: "React", language: "React" }
  ];

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" exact render={() => <Main videos={videos}/>}/>
          <Route path="/video" component={Video}/>
          <Route path="/user" render={() => <User videos={videos}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
