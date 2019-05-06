import React from 'react'
import VideoCard from './VideoCard'

export default class VideoList extends React.Component {

    loadVideos = () => {
        if(this.props.filter === 'All') {
            return this.props.videos.map((video) => {
            return < VideoCard {...video} />
        })} else {
            return this.props.filteredVideos.map((video) => {
                return <VideoCard {...video} />
            })
        }
    }

    render(){
        return(
            <div>
                {this.loadVideos()}
            </div>
        )
    }
}