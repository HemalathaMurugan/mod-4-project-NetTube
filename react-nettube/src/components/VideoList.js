import React from 'react'
import VideoCard from './VideoCard'

export default class VideoList extends React.Component {
    render(){
        return(
            <div className="video-list">
                <h1>Video List</h1>
                <VideoCard/>
            </div>
        )
    }
}