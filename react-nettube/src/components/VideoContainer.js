import React from 'react'
import VideoList from './VideoList'

export default class VideoContainer extends React.Component {
    render(){
        return(
            <div className="video-container">
                <h1>All Videos</h1>
                <VideoList/>
            </div>
        )
    }
}