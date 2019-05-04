import React from 'react'
import VideoCard from './VideoCard'

export default class VideoList extends React.Component {
    render(){
        return(
            <div className="video-list">
                <h2>Javascript</h2>
                <div className="video-list-javascript">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </div>

                <h2>Ruby</h2>
                <div className="video-list-ruby">
                    <VideoCard/>
                </div>

                <h2>React</h2>
                <div className="video-list-react">
                    <VideoCard/>
                </div>
            </div>
        )
    }
}