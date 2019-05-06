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
            <div className="video-list">
                <h1>Javascript</h1>
                <div className="video-list-javascript">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </div>

                <h1>Ruby</h1>
                <div className="video-list-ruby">
                    <VideoCard/>
                </div>

                <h1>React</h1>
                <div className="video-list-react">
                    <VideoCard/>
                </div>

                {/* <div>
                    {this.loadVideos()}
                </div> */}
            </div>	           
        )
    }
}