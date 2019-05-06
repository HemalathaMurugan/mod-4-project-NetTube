import React from 'react'

export default class VideoCard extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.language}</p>
            </div>
        )
    }
}