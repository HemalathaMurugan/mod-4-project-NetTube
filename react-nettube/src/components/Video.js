import React from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'
import NavBar from './NavBar'
import VideoList from './VideoList'

export default class Video extends React.Component {
    render(){
      console.log(this.props)
      if(this.props.id) {
        return <p>Please select a video</p>
      } else {
        return (
          <div>
          <NavBar />
            <div className="video-container">
              <div>
                <video width="600" controls>
                  <source src={this.props.url} type="video/mp4"/>
                  <source src="mov_bbb.ogg" type="video/ogg"/>
                  Your browser does not support HTML5 video.
                </video>
                <div className="video-description">
                  <h2>{this.props.title}</h2>
                  <p>Youtube Username</p>
                  <p>Date Uploaded</p>
                  <p>{this.props.description}</p>
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
}
