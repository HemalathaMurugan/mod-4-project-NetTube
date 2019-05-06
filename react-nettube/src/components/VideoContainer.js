import React from 'react'
import VideoList from './VideoList'
import Filter from './Filter'

export default class VideoContainer extends React.Component {

    render(){
        return(
            <div className="video-container">
                <h1>Video Container</h1>
                <Filter filterVideos={this.props.filterVideos}/>
                <VideoList videos={this.props.videos} filteredVideos={this.props.filteredVideos} filter={this.props.filter}/>
            </div>
        )
    }
}