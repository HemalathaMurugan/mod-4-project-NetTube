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
    searchResults: this.videos,
    currentlyPlaying: null
  }

  handleSearch = (value) => {
    let original = this.state.videos
    let searchResults = original.filter(video => video.title.toLowerCase().includes(value))
    this.setState({searchResults: searchResults})
  }

  selectVideo = (clickedVideo) => {
    this.setState({
      currentlyPlaying: clickedVideo
    })
    this.props.history.replace('/video')
  }

  render() {
    if(localStorage.getItem('token') === null) {
      return (
        <Router>
        <div className="App">
          <Switch>
            <Route path="/" render={() => <Login checkAuth={this.checkAuth} handleSearch={this.handleSearch} videos={this.state.videos}/>}/>
          </Switch>
        </div>
      </Router>
      )
    } else {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route  path="/new" component={NewUser} />
            <Route  exact path="/" render={() => <Main selectVideo={this.selectVideo} handleSearch={this.handleSearch} videos={this.state.videos}/>}/>
            <Route  path="/video" render={() => <Video handleSearch={this.handleSearch} currentlyPlaying={this.state.currentlyPlaying} videos={this.state.videos}/>}/>
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
  }

  checkAuth = () => {
    if(localStorage.getItem('token') !== null){
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

  componentDidMount(){
    this.checkAuth()
  }
}