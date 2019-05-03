import React from 'react'
import VideoCard from './VideoCard'

export default class VideoList extends React.Component {
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
            </div>
        )
    }
}