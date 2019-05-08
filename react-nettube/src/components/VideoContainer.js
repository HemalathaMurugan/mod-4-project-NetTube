import React from 'react'
import VideoList from './VideoList'

export default class VideoContainer extends React.Component {

    render(){
        console.log(this.props.videos)
        return (
            <div className="video-container">
                <VideoList videos={this.props.videos.filter(video => video.language === "Javascript")} title="Javascript"/>
                <VideoList videos={this.props.videos.filter(video => video.language === "Ruby")} title="Ruby" />
                <VideoList videos={this.props.videos.filter(video => video.language === "React")} title="React"/>
                <VideoList videos={this.props.videos.filter(video => video.language === "Rails")} title="Rails"/>
            </div>
        )
    }
}