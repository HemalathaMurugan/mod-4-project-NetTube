import React from 'react'

export default class VideoCard extends React.Component {
    render(){	  
        return(	
            <div className="video-card">      
                <div className="video-card-details">
                    <video width="400" controls>
                    <source src="mov_bbb.mp4" type="video/mp4"/>
                    <source src="mov_bbb.ogg" type="video/ogg"/>
                    Your browser does not support HTML5 video.
                    </video>
                    <h4>Title: {this.props.video.title}</h4>
                    <p>Language: {this.props.video.language}</p>
                    <p>Youtube Name</p>
                    <p>Views</p>
                    <p>Date</p>
                </div>
            </div>   
        )
    }
}