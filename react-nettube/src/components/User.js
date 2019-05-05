import React from 'react'
import VideoContainer from './VideoContainer'

const User = () => {
    return (
      <div>
        <h1>User Page</h1>
        <div className="user-videos">
          <VideoContainer/>
        </div>
      </div>
    );
  }
  
  export default User;