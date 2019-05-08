import React from 'react'
// import VideoContainer from './VideoContainer'
import NavBar from './NavBar'
import VideoList from './VideoList';

const User = (props) => {
    return (
      <div>
        <NavBar/>
        <h1>User Page</h1>
        <div className="user-videos">
          <VideoList videos={props.videos}/>
        </div>
      </div>
    );
  }
  
  export default User;