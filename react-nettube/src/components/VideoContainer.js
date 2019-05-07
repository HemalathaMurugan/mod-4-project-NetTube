import React from 'react'
import VideoList from './VideoList'

export default class VideoContainer extends React.Component {

    render(){
        if (this.props.filter === "All") {
            return (
                <div className="video-container">
                    {/* <VideoList videos={this.props.videos} filteredVideos={this.props.filteredVideos} filter={this.props.filter} /> */}
                    <VideoList videos={this.props.videos.filter(video => video.language === "Javascript")} title="Javascript"/>
                    <VideoList videos={this.props.videos.filter(video => video.language === "Ruby")} title="Ruby" />
                    <VideoList videos={this.props.videos.filter(video => video.language === "React")} title="React"/>
                    <VideoList videos={this.props.videos.filter(video => video.language === "Rails")} title="Rails"/>
                </div>
            )
        } else {
            return (
                <VideoList videos={this.props.videos.filter(video => video.language === this.props.filter)} title={this.props.filter}/>
            )
        }
    }
}