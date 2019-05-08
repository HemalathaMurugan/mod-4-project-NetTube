import React from 'react'
import VideoContainer from './VideoContainer'
import NavBar from './NavBar'
import AddComment from './AddComment'
import Test from './Test'


export default class Main extends React.Component {


    state = {
        videos: [],
        filteredVideos: [],
        searchResults: this.videos,
        filter: 'All'
    }

    filterVideos = (value) => {
        this.setState({
            filter: value,
            filteredVideos: this.state.videos.filter((video) => video.language === value)
        })
    }

    handleSubmit = (value) => {
        let original = this.state.videos
        let searchResults = original.filter(video => video.title.toLowerCase().includes(value))
        this.setState({searchResults: searchResults})
        this.loadVideos()
    }

    loadVideos = () => {
        if(this.state.videos == this.state.searchResults){
            return <VideoContainer filterVideos={this.filterVideos} videos={this.state.videos} filteredVideos={this.state.filteredVideos} filter={this.state.filter}/>
        } else {
            return <VideoContainer filterVideos={this.filterVideos} videos={this.state.searchResults} filteredVideos={this.state.filteredVideos} filter={this.state.filter}/>
        }
    }

    loadTest = () => {
        return this.state.videos.map(video => < Test {...video}/>)
    }

    render(){
        console.log(this.state.videos)
        return(
            <div className="main-page">
                <NavBar handleSubmit={this.handleSubmit}/>
                {/* {this.loadVideos()} */}
                {this.loadTest()}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://localhost:3000/videos')
        .then((res) => res.json())
        .then((videos) => this.setState({videos: videos}))      
    }
}