import React from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'
import NavBar from './NavBar'

export default class Video extends React.Component {
    render(){
      return (
        <div>
        <NavBar />
          <div className="video-container">
            <div>
              <video width="600" controls>
                <source src="mov_bbb.mp4" type="video/mp4"/>
                <source src="mov_bbb.ogg" type="video/ogg"/>
                Your browser does not support HTML5 video.
              </video>
              <div className="video-description">
                <h2>Video Title</h2>
                <p>Youtube Username</p>
                <p>Views</p>
                <p>Date Uploaded</p>
                <p>Description</p>
              </div>
            </div>
            <br/>
            <div className="comment-container">
              <CommentList />
              <br/>
              <AddComment />
            </div>
          </div>
        </div>
      )
    }
}
