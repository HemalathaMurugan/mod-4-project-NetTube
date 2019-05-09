import React from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'
import NavBar from './NavBar'
import VideoList from './VideoList'

export default class Video extends React.Component {

  state = {
    currentlyPlaying: {}
  }

  render(){
    console.log(this.props.match.params.id)
    if(!this.state.currentlyPlaying.id) {
      return <p>Please select a video</p>
    } else {
      return (
        <div>
        <NavBar />
          <div className="video-container">
            <div>
              <video width="600" controls>
                <source src={this.state.currentlyPlaying.url} type="video/mp4"/>
                Your browser does not support HTML5 video.
              </video>
              <div className="video-description">
                <h2>{this.state.currentlyPlaying.title}</h2>
                <p>Youtube Username</p>
                <p>Date Uploaded</p>
                <p>{this.state.currentlyPlaying.description}</p>
              </div>
            </div>
            <br/>
            <div className="comment-container">
              <CommentList />
              <br/>
              <AddComment />
            </div>

            <div className="suggested-videos-container">
              <VideoList videos={this.props.videos}/>
            </div>
          </div>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/videos/${this.props.match.params.id}`, {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(video => this.setState({currentlyPlaying: video}))
  }

}
