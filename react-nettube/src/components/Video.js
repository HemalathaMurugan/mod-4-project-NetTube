import React from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

const Video = () => {
    return (
      <div className="video-container">
        <div>
          <video width="600" controls>
            <source src="mov_bbb.mp4" type="video/mp4"/>
            <source src="mov_bbb.ogg" type="video/ogg"/>
            Your browser does not support HTML5 video.
          </video>
          <h2>Video Title</h2>
          <p>Youtube Username</p>
          <p>Views</p>
          <p>Date Uploaded</p>
          <p>Description</p>
        </div>
        <br/>
        <div className="comment-container">
          <CommentList />
          <br/>
          <AddComment />
        </div>
      </div>
    );
  }
  
  export default Video;