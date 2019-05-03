import React from 'react'
import VideoList from './VideoList'

export default class VideoContainer extends React.Component {
    render(){
        return(
            <div>
                <h1>Video Container</h1>
                <VideoList/>
            </div>
        )
    }
}