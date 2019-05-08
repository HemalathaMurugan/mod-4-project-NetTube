import React from 'react'

export default class Test extends React.Component {
    render(){
        console.log(this.props)
        return(	
            <div className="video-card">      
                <div className="video-card-details">
                    <video width="400" controls>
                    <source src={this.props.url} type="video/mp4"/>
                    <source src="mov_bbb.ogg" type="video/ogg"/>
                    Your browser does not support HTML5 video.
                    </video>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.language}</p>
                    <p>{this.props.description}</p>
                    <p>Youtube Name</p>
                    <p>Date</p>
                </div>
            </div>
                
        )
    }
}