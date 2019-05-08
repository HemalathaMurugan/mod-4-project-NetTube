import React from 'react'
import VideoList from './VideoList'

export default class VideoContainer extends React.Component {

    render(){
        return (
            <div className="video-container">
                <VideoList selectVideo={this.props.selectVideo} videos={this.props.videos.filter(video => video.language === "Javascript")} title="Javascript"/>
                <VideoList selectVideo={this.props.selectVideo} videos={this.props.videos.filter(video => video.language === "Ruby")} title="Ruby" />
                <VideoList selectVideo={this.props.selectVideo} videos={this.props.videos.filter(video => video.language === "React")} title="React"/>
                <VideoList selectVideo={this.props.selectVideo} videos={this.props.videos.filter(video => video.language === "Rails")} title="Rails"/>
            </div>
        )
    }
}