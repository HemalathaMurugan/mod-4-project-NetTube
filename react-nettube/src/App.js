import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import Video from './components/Video'
import User from './components/User'
import NewUser from './components/NewUser'
import NewVideoForm from './components/NewVideoForm'
import EditVideo from './components/EditVideo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class App extends React.Component {
  state = {
    videos: [],
    searchResults: this.videos
  }

  handleSearch = (value) => {
    let original = this.state.videos
    let searchResults = original.filter(video => video.title.toLowerCase().includes(value))
    this.setState({searchResults: searchResults})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route  path="/login" render={() => <Login handleLoginSubmit={this.handleLoginSubmit}/>}/>
            <Route  path="/new" component={NewUser} />
            <Route  exact path="/" render={() => <Main handleSearch={this.handleSearch} videos={this.state.videos}/>}/>
            <Route  path="/video" render={() => <Video handleSearch={this.handleSearch} videos={this.state.videos}/>}/>
            <Route  path="/add-video" component={NewVideoForm}/>
            <Route  path="/user" render={() => <User handleSearch={this.handleSearch} videos={this.state.videos}/>}/>
            {/* <Route path={`/user/${user.id}/edit}`} component={EditUser} */}
            {/* <Route path="/user" component={User}/> */}
            <Route path="/edit-video/:id" component={EditVideo}/>
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3000/videos', {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) =>  res.json())
    .then((videos) => this.setState({
      videos: videos,
      searchResults: videos
    }))
  }
}

