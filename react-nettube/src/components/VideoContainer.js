import React from 'react'
import VideoList from './VideoList'
import Filter from './Filter'

export default class VideoContainer extends React.Component {

    state = {
        videos: [{title: "Javascript", language: 'Javascript'},
        {title: "Javascript", language: 'Javascript'},
        {title: "Ruby", language: 'Ruby'},
        {title: "Ruby", language: 'Ruby'},
        {title: "Rails", language: 'Rails'},
        {title: "Rails", language: 'Rails'},
        {title: "React", language: 'React'},
        {title: "React", language: 'React'}],
        filteredVideos: [],
        filter: 'All'
    }

    filterVideos = (value) => {
        this.setState({
            filter: value,
            filteredVideos: this.state.videos.filter((video) => video.language === value)
        })
    }

    render(){
        return(
            <div>
                <h1>Video Container</h1>
                <Filter filterVideos={this.filterVideos}/>
                <VideoList videos={this.state.videos} filteredVideos={this.state.filteredVideos} filter={this.state.filter}/>
            </div>
        )
    }
}