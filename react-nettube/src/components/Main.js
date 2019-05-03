import React from 'react'
import VideoContainer from './VideoContainer'

export default class Main extends React.Component {
    render(){
        return(
            <div className="main-page">
                {/* <h1>Main Page</h1> */}
                <VideoContainer/>
            </div>
        )
    }
}