import React from 'react'
import VideoContainer from './VideoContainer'
import NavBar from './NavBar'
import Login from './Login'

export default class Main extends React.Component {

    render(){
       // console.log(this.handleLoginSubmit)
        return(
            <div className="main-page">
                <NavBar handleSearch={this.handleSearch}/>
                <VideoContainer videos={this.props.videos} />
            </div>
        )
    }
}
